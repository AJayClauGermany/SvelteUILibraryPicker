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
import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'

const run = promisify(execFile)
const root = new URL('..', import.meta.url).pathname
const args = process.argv.slice(2)
const asJson = args.includes('--json')
const only = new Set(args.filter(a => !a.startsWith('--')))

/** CLIs that install copy-paste registries; when one is the first package, npm dates say nothing about the registry. */
const registryClis = new Set(['shadcn-svelte', 'jsrepo'])
/** Versions published by bots, not releases: nightly, canary, experimental and snapshot builds. */
const automatedBuild = /nightly|canary|experimental|snapshot|insiders/i

async function entries() {
	const out = []
	for (const dir of ['libraries', 'tools']) {
		const base = join(root, 'src/lib/data', dir)
		for (const file of (await readdir(base)).filter(f => f.endsWith('.ts')).sort()) {
			const src = await readFile(join(base, file), 'utf8')
			const id = src.match(/^\tid: '([^']+)'/m)?.[1]
			// `repository: 'https://…'`, or `repository: repo` with `const repo = 'https://…'` above.
			const repoValue = src.match(/^\trepository: (?:'([^']+)'|(\w+))/m)
			const repository = repoValue?.[1] ?? src.match(new RegExp(`^const ${repoValue?.[2]} = '([^']+)'`, 'm'))?.[1]
			const packages = [...(src.match(/^\tpackages: \[([^\]]*)\]/m)?.[1] ?? '').matchAll(/'([^']+)'/g)].map(m => m[1])
			if (!id || (only.size && !only.has(id))) continue
			out.push({ kind: dir === 'libraries' ? 'library' : 'tool', id, repository, packages })
		}
	}
	return out
}

async function npmFacts(pkg) {
	try {
		const { stdout } = await run('npm', ['view', pkg, 'time', 'deprecated', 'dist-tags', '--json'], { maxBuffer: 64 << 20 })
		const data = JSON.parse(stdout)
		const latest = data['dist-tags']?.latest
		// Newest publish of any version, ignoring automated builds; on a same-day tie prefer `latest`.
		const times = Object.entries(data.time ?? {})
			.filter(([v]) => v !== 'created' && v !== 'modified' && !automatedBuild.test(v))
			.map(([v, t]) => [v, t.slice(0, 10)])
		times.sort((a, b) => b[1].localeCompare(a[1]) || (b[0] === latest) - (a[0] === latest))
		const [newestVersion, newestDate] = times[0] ?? []
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
	const isRegistry = registryClis.has(entry.packages[0]) && entry.id !== entry.packages[0]
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
