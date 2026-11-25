/**
 * Link check: requests every URL the data records (docs, component deep links, licenses,
 * sources) and reports the ones that are gone. Read-only.
 *
 *   pnpm check:links                 # everything (a few minutes the first time; cached after)
 *   pnpm check:links melt bits-ui    # only these entries
 *   pnpm check:links --fresh         # ignore the cache
 *   pnpm check:links --redirects     # also list links that now redirect somewhere else
 *   pnpm check:links --markdown      # Markdown table (weekly issue)
 *   pnpm check:links --json
 *
 * Results:
 *   broken   404 / 410: the page is gone. Fix the link (find the new page in the official docs).
 *   blocked  401 / 403 / 429: the host refused an automated request. Usually fine; check by hand.
 *   error    timeouts, DNS failures, 5xx. Re-run later before acting.
 * Exit code 1 when anything is broken.
 *
 * Limits: the #fragment of a URL is not checked, and docs sites that render client-side answer
 * 200 for any path, so a wrong deep link on those can't be caught here (docs/backlog.md lists them).
 * To spare hosts, github.com file links are checked on raw.githubusercontent.com and npm package
 * pages on the registry API (with GITHUB_TOKEN set, github.com repos and folders go to the GitHub
 * API too); requests per host are limited, and good results are cached for
 * 7 days in node_modules/.cache/ulp-links.json.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allEntries, c, loadData, mapLimit, mdTable, parseArgs, root, table, exit } from './lib/shared.js'
import { urlsOf } from './lib/urls.js'

const { flags, positional } = parseArgs()
const only = new Set(positional)
const CACHE = join(root, 'node_modules/.cache/ulp-links.json')
const CACHE_DAYS = 7
const PER_HOST = 2
const TIMEOUT_MS = 20_000
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const UA = 'Mozilla/5.0 (compatible; svelte-ui-library-picker link check)'

const data = await loadData()
const found = allEntries(data)
	.filter(({ entry }) => !only.size || only.has(entry.id))
	.flatMap(({ kind, entry }) => urlsOf(kind, entry).map(u => ({ ...u, entry: entry.id })))

const byUrl = new Map()
for (const f of found) {
	const url = f.url.split('#')[0]
	if (!byUrl.has(url)) byUrl.set(url, [])
	byUrl.get(url).push(`${f.entry} ${f.where}`)
}

let cache = {}
try {
	cache = JSON.parse(readFileSync(CACHE, 'utf8'))
}
catch {}
const fresh = r => !flags.fresh && r && r.level === 'ok' && (Date.now() - r.at) / 86_400_000 < CACHE_DAYS

/** Where to actually send the request (see the header comment). */
function probeUrl(url) {
	const u = new URL(url)
	const blob = u.host === 'github.com' && u.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/(.+)$/)
	if (blob) return `https://raw.githubusercontent.com/${blob[1]}/${blob[2]}/${blob[3]}`
	// With a token (CI has GITHUB_TOKEN), repo roots and folders go to the REST API, which is
	// rate limited per token instead of throttling anonymous page views.
	const gh = u.host === 'github.com' && GITHUB_TOKEN && u.pathname.match(/^\/([^/]+)\/([^/]+?)(?:\/tree\/([^/]+)(\/.*)?)?\/?$/)
	if (gh) return gh[3] ? `https://api.github.com/repos/${gh[1]}/${gh[2]}/contents${gh[4] ?? ''}?ref=${gh[3]}` : `https://api.github.com/repos/${gh[1]}/${gh[2]}`
	const npm = u.host === 'www.npmjs.com' && u.pathname.match(/^\/package\/(.+?)\/?$/)
	if (npm) return `https://registry.npmjs.org/${npm[1].replace('/', '%2F')}`
	return url
}

async function request(url, method) {
	const ctrl = new AbortController()
	const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
	try {
		const headers = { 'user-agent': UA, 'accept': 'text/html,application/json;q=0.9,*/*;q=0.8' }
		if (GITHUB_TOKEN && url.startsWith('https://api.github.com/')) headers.authorization = `Bearer ${GITHUB_TOKEN}`
		const res = await fetch(url, { method, redirect: 'follow', signal: ctrl.signal, headers })
		res.body?.cancel().catch(() => {})
		return { status: res.status, finalUrl: res.url, retryAfter: Number(res.headers.get('retry-after')) || 0 }
	}
	catch (e) {
		return { status: 0, error: e.name === 'AbortError' ? 'timeout' : (e.cause?.code ?? e.message) }
	}
	finally {
		clearTimeout(timer)
	}
}

async function check(url) {
	const target = probeUrl(url)
	let r = await request(target, 'HEAD')
	// Many servers mishandle HEAD; ask again with GET before reporting anything.
	if (r.status === 0 || r.status >= 400) r = await request(target, 'GET')
	if (r.status === 429) {
		await new Promise(res => setTimeout(res, Math.min(r.retryAfter || 10, 30) * 1000))
		r = await request(target, 'GET')
	}
	const level = r.status >= 200 && r.status < 400 ? 'ok'
		: [404, 410].includes(r.status) ? 'broken'
			: [401, 403, 429, 999].includes(r.status) ? 'blocked'
				: 'error'
	const norm = s => s?.replace(/\/$/, '').replace(/^http:/, 'https:')
	const moved = level === 'ok' && target === url && r.finalUrl && norm(new URL(r.finalUrl).origin + new URL(r.finalUrl).pathname) !== norm(new URL(url).origin + new URL(url).pathname)
	return { level, status: r.status, error: r.error, movedTo: moved ? r.finalUrl : undefined, at: Date.now() }
}

// Group by host so each host sees at most PER_HOST requests at a time, while hosts run in parallel.
const urls = [...byUrl.keys()]
const todo = urls.filter(u => !fresh(cache[u]))
const hosts = new Map()
for (const u of todo) {
	const h = new URL(probeUrl(u)).host
	if (!hosts.has(h)) hosts.set(h, [])
	hosts.get(h).push(u)
}
let done = 0
const progress = process.stderr.isTTY && !flags.json
await mapLimit([...hosts.values()], 12, list => mapLimit(list, PER_HOST, async (u) => {
	cache[u] = await check(u)
	done++
	if (progress) process.stderr.write(`\r${c.dim(`checked ${done}/${todo.length} (${urls.length - todo.length} cached)`)}`)
}))
if (progress) process.stderr.write('\n')
mkdirSync(dirname(CACHE), { recursive: true })
writeFileSync(CACHE, JSON.stringify(cache))

const results = urls.map(url => ({ url, ...cache[url], usedIn: byUrl.get(url) }))
const bad = results.filter(r => r.level !== 'ok' || (flags.redirects && r.movedTo))
const order = { broken: 0, error: 1, blocked: 2, ok: 3 }
bad.sort((a, b) => order[a.level] - order[b.level] || a.url.localeCompare(b.url))
const count = l => results.filter(r => r.level === l).length
const summary = `${urls.length} URLs: ${count('ok')} ok, ${count('broken')} broken, ${count('blocked')} blocked, ${count('error')} errors.`

if (flags.json) {
	console.log(JSON.stringify(bad, null, '\t'))
}
else if (flags.markdown) {
	console.log(`## Link check\n\n${summary}\n`)
	if (bad.length) console.log(mdTable(['Level', 'Status', 'URL', 'Used in'], bad.map(r => [r.level, r.error ?? r.status, r.movedTo ? `${r.url} -> ${r.movedTo}` : r.url, r.usedIn.slice(0, 3).join('; ') + (r.usedIn.length > 3 ? ` (+${r.usedIn.length - 3})` : '')])))
}
else {
	const color = { broken: c.red, error: c.yellow, blocked: c.dim, ok: c.cyan }
	if (bad.length) {
		console.log(table(bad.map(r => [color[r.level](r.movedTo ? 'moved' : r.level), r.error ?? r.status, r.movedTo ? `${r.url}\n${' '.repeat(16)}-> ${r.movedTo}` : r.url, c.dim(r.usedIn[0] + (r.usedIn.length > 1 ? ` (+${r.usedIn.length - 1})` : ''))]), { header: ['level', 'status', 'url', 'used in'] }))
	}
	console.log(`\n${summary}`)
}
await exit(count('broken') ? 1 : 0)
