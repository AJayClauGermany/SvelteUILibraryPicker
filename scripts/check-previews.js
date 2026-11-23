/**
 * Render check for live previews: opens each preview in headless Chromium and reports
 * console errors, uncaught exceptions and previews that render nothing.
 *
 *   node scripts/check-previews.js                     # every preview
 *   node scripts/check-previews.js svelte-sonner melt  # only these library/tool folders
 *   node scripts/check-previews.js melt/tabs           # one preview
 *   node scripts/check-previews.js --dark ...          # check in dark mode
 *   node scripts/check-previews.js --shots <dir> ...   # also save a PNG per preview
 *
 * It starts the preview app's own Vite dev server (previews/vite.config.ts) on a free port,
 * so it needs no running `pnpm dev`. Exit code 1 when any preview fails. Network requests to
 * other hosts are blocked (see allowedHosts), so a preview that depends on a CDN or remote API shows up here.
 * Set CHECK_CACHE=<name> to give parallel runs their own Vite dep cache.
 * Not a screenshot diff: see docs/backlog.md ("Screenshot tests") for why.
 */
import { mkdirSync, readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

// Playwright is not a project dependency: use a global install (`npm i -g playwright`, or the one
// preinstalled in cloud agent containers, found through NODE_PATH).
const { chromium } = createRequire(import.meta.url)('playwright')

const root = fileURLToPath(new URL('..', import.meta.url))
const argv = process.argv.slice(2)
const dark = argv.includes('--dark')
const shotsAt = argv.indexOf('--shots')
const shots = shotsAt >= 0 ? argv[shotsAt + 1] : undefined
const filters = argv.filter((a, i) => !a.startsWith('--') && (shotsAt < 0 || i !== shotsAt + 1))

const src = join(root, 'previews/src')
const all = readdirSync(src, { withFileTypes: true })
	.filter(d => d.isDirectory())
	.flatMap(d => readdirSync(join(src, d.name))
		.filter(f => f.endsWith('.svelte'))
		.map(f => `${d.name}/${f.replace(/\.svelte$/, '')}`))
const targets = filters.length ? all.filter(t => filters.some(f => t === f || t.startsWith(`${f}/`))) : all
if (!targets.length) {
	console.error(`No previews match ${filters.join(', ')}`)
	process.exit(1)
}
if (shots) mkdirSync(shots, { recursive: true })

const server = await createServer({ configFile: join(root, 'previews/vite.config.ts'), server: { port: 0 }, logLevel: 'error',
	// Own dep cache, so a check never races a running `pnpm dev` (or another check).
	cacheDir: join(root, 'node_modules', `.vite-previews-check${process.env.CHECK_CACHE ? `-${process.env.CHECK_CACHE}` : ''}`) })
await server.listen()
const base = server.resolvedUrls.local[0]
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 480, height: 400 } })
// Block third-party hosts: previews must be self-contained, except for what a library's own
// default theme loads (keep this list short and say which library needs each host).
const allowedHosts = new Set([
	'localhost',
	'cdn.svar.dev', // SVAR Willow themes load their fonts and icon font from here by default
])
await page.route(url => !allowedHosts.has(new URL(url).hostname), route => route.abort())

let failed = 0
for (const t of targets) {
	const [library, component] = t.split('/')
	const problems = []
	const onConsole = msg => msg.type() === 'error' && problems.push(`console: ${msg.text()}`)
	const onError = err => problems.push(`exception: ${err.message}`)
	page.on('console', onConsole)
	page.on('pageerror', onError)
	try {
		await page.goto(`${base}?library=${library}&component=${component}&theme=${dark ? 'dark' : 'light'}`, { waitUntil: 'networkidle', timeout: 60_000 })
		await page.waitForTimeout(300)
		const box = await page.locator('#app').evaluate(el => {
			const r = el.getBoundingClientRect()
			return { children: el.childElementCount, text: el.textContent?.trim().slice(0, 60), w: r.width, h: r.height }
		})
		if (!box.children) problems.push('renders nothing')
		else if (box.h < 4) problems.push(`renders with no height (${box.w}x${box.h})`)
		if (box.text?.startsWith('No preview for')) problems.push(box.text)
		if (shots) await page.screenshot({ path: join(shots, `${library}--${component}.png`), fullPage: true })
	}
	catch (e) {
		problems.push(`load: ${e.message.split('\n')[0]}`)
	}
	page.off('console', onConsole)
	page.off('pageerror', onError)
	if (problems.length) failed++
	console.log(`${problems.length ? 'FAIL' : 'ok  '} ${t}${problems.length ? `\n     ${problems.join('\n     ')}` : ''}`)
}

await browser.close()
await server.close()
console.log(`\n${targets.length - failed}/${targets.length} previews rendered cleanly`)
process.exit(failed ? 1 : 0)
