#!/usr/bin/env node
/**
 * Collects maintenance facts for library and tool entries, for filling or refreshing their
 * `maintenance` field by hand (this script never edits data files).
 *
 *   node scripts/maintenance-facts.js                 # every library and tool
 *   node scripts/maintenance-facts.js ato-ui smelte   # only these ids
 *   node scripts/maintenance-facts.js --json          # machine-readable output
 *
 * Sources, all primary:
 *  - npm registry: newest published version and its date (`npm view <pkg> time`), and the
 *    `deprecated` message of the latest version.
 *  - the repository itself: date of the newest commit on the default branch, and for
 *    shadcn-style registries (no npm package of their own) the newest tag, from a blob-less clone.
 *  - GitHub repository search (or the GitLab projects API): whether the repository is archived.
 *    Uses `gh api` when available, since anonymous GitHub API calls are heavily rate limited.
 */
import { execFile } from 'node:child_process'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { allEntries, loadData, REGISTRY_CLIS } from './lib/shared.js'

const run = promisify(execFile)
const args = process.argv.slice(2)
const asJson = args.includes('--json')
const only = new Set(args.filter(a => !a.startsWith('--')))

/** Versions published by bots, not releases: nightly, canary, experimental and snapshot builds. */
const automatedBuild = /nightly|canary|experimental|snapshot|insiders/i

async function entries() {
	const data = await loadData()
	return allEntries(data)
		.filter(({ entry }) => !only.size || only.has(entry.id))
		.map(({ kind, entry }) => ({ kind, id: entry.id, repository: entry.repository, packages: entry.packages }))
}

async function npmFacts(pkg) {
	try {
		const { stdout } = await run('npm', ['view', pkg, 'time', 'deprecated', 'dist-tags', '--json'], { maxBuffer: 64 << 20 })
		const data = JSON.parse(stdout)
		const latest = data['dist-tags']?.latest
		// Newest publish of any version, ignoring automated builds; on a same-day tie prefer `latest`,
		// otherwise the later timestamp.
		const times = Object.entries(data.time ?? {})
			.filter(([v]) => v !== 'created' && v !== 'modified' && !automatedBuild.test(v))
		times.sort((a, b) => b[1].slice(0, 10).localeCompare(a[1].slice(0, 10)) || (b[0] === latest) - (a[0] === latest) || b[1].localeCompare(a[1]))
		const [newestVersion, newestTime] = times[0] ?? []
		const newestDate = newestTime?.slice(0, 10)
		return {
			newest: newestVersion ? { version: newestVersion, date: newestDate } : undefined,
			latest: latest ? { version: latest, date: data.time?.[latest]?.slice(0, 10) } : undefined,
			deprecated: data.deprecated || undefined,
		}
	}
	catch (e) {
		return { error: String(e.stderr || e.message).split('\n')[0] }
	}
}

/** `https://github.com/o/r/tree/main/x` -> { host: 'github', slug: 'o/r', url: 'https://github.com/o/r' } */
function parseRepo(url) {
	const m = url?.match(/^https:\/\/(github\.com|gitlab\.com)\/([^/]+)\/([^/#?]+)/)
	if (!m) return undefined
	const name = m[3].replace(/\.git$/, '')
	return { host: m[1].split('.')[0], slug: `${m[2]}/${name}`, url: `https://${m[1]}/${m[2]}/${name}` }
}

async function archived(repo) {
	try {
		if (repo.host === 'gitlab') {
			const res = await fetch(`https://gitlab.com/api/v4/projects/${encodeURIComponent(repo.slug)}`)
			const data = await res.json()
			return { archived: Boolean(data.archived), via: `https://gitlab.com/${repo.slug}` }
		}
		const { stdout } = await run('gh', ['api', '-X', 'GET', 'search/repositories', '-f', `q=repo:${repo.slug}`, '--jq', '.items[0] | [.full_name, .archived] | @tsv'])
		const [fullName, flag] = stdout.trim().split('\t')
		if (!fullName) return { error: 'not found in search' }
		return { archived: flag === 'true', fullName }
	}
	catch (e) {
		return { error: String(e.stderr || e.message).split('\n')[0] }
	}
}

async function gitFacts(repo) {
	const dir = await mkdtemp(join(tmpdir(), 'maint-'))
	try {
		await run('git', ['clone', '--quiet', '--filter=blob:none', '--no-checkout', `${repo.url}.git`, dir], { timeout: 180_000 })
		const lastCommit = (await run('git', ['-C', dir, 'log', '-1', '--format=%cs'])).stdout.trim()
		const tag = (await run('git', ['-C', dir, 'for-each-ref', '--sort=-creatordate', '--count=1', '--format=%(refname:short) %(creatordate:short)', 'refs/tags'])).stdout.trim()
		const [tagName, tagDate] = tag.split(' ')
		return { lastCommit, newestTag: tagName ? { tag: tagName, date: tagDate } : undefined }
	}
	catch (e) {
		return { error: String(e.stderr || e.message).split('\n')[0] }
	}
	finally {
		await rm(dir, { recursive: true, force: true })
	}
}

async function collect(entry) {
	const repo = parseRepo(entry.repository)
	const isRegistry = REGISTRY_CLIS.has(entry.packages[0]) && entry.id !== entry.packages[0]
	const [npm, arch, git] = await Promise.all([
		isRegistry ? undefined : npmFacts(entry.packages[0]),
		repo ? archived(repo) : { error: 'repository is not on github.com or gitlab.com' },
		repo ? gitFacts(repo) : { error: 'repository is not on github.com or gitlab.com' },
	])
	return { ...entry, registry: isRegistry, npm, archive: arch, git }
}

async function pool(items, size, fn) {
	const results = []
	let i = 0
	await Promise.all(Array.from({ length: size }, async () => {
		while (i < items.length) {
			const idx = i++
			results[idx] = await fn(items[idx])
		}
	}))
	return results
}

const results = await pool(await entries(), 6, collect)
if (asJson) {
	console.log(JSON.stringify(results, null, '\t'))
}
else {
	for (const r of results) {
		const release = r.registry
			? `registry; newest tag ${r.git.newestTag ? `${r.git.newestTag.tag} (${r.git.newestTag.date})` : 'none'}`
			: r.npm?.error ? `npm error: ${r.npm.error}` : `npm newest ${r.npm.newest?.version} (${r.npm.newest?.date}), latest ${r.npm.latest?.version} (${r.npm.latest?.date})`
		const flags = [
			r.archive?.archived && 'ARCHIVED',
			r.archive?.error && `archive? ${r.archive.error}`,
			r.npm?.deprecated && `DEPRECATED: ${r.npm.deprecated}`,
		].filter(Boolean)
		console.log(`${r.kind.padEnd(7)} ${r.id.padEnd(30)} ${release}; last commit ${r.git?.lastCommit ?? `? (${r.git?.error})`}${flags.length ? `; ${flags.join('; ')}` : ''}`)
	}
}
