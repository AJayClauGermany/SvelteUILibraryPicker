import { createHash } from 'node:crypto'
import { mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { availableParallelism } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Worker } from 'node:worker_threads'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { defaultTheme, highlighter } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { createServer, defineConfig, type Plugin } from 'vite'

/** Dev only: serve the isolated preview app (previews/) at /preview/ on the same port. */
function previewsDevServer(): Plugin {
	return {
		name: 'ulp:previews-dev',
		apply: 'serve',
		async configureServer(server) {
			const previews = await createServer({
				configFile: new URL('./previews/vite.config.ts', import.meta.url).pathname,
				server: { middlewareMode: true, hmr: { server: server.httpServer ?? undefined, path: '/preview/__hmr' } },
				appType: 'mpa',
			})
			server.httpServer?.on('close', () => previews.close())
			server.middlewares.use((req, res, next) => {
				if (req.url?.startsWith(`${BASE}/preview/`) || req.url === `${BASE}/preview`) return previews.middlewares(req, res, next)
				next()
			})
		},
	}
}

type ThemeOptions = NonNullable<Parameters<typeof defaultTheme>[0]>

/**
 * `import('/previews/src/<lib>/<component>.svelte?svp-code')` gives a Svelte component that
 * renders the preview's source as a SveltePress code block: the theme's own `highlighter`
 * (shiki, light/dark themes, copy button, twoslash hovers), exactly as a fenced block in a
 * Markdown page. The output is Svelte markup (it contains `<CopyCode />` and `<Floating>`
 * snippets), so it is compiled as a component rather than injected as HTML.
 *
 * Twoslash type-checks every preview (about half a second each), and the build loads each
 * preview twice (client and server), so this plugin:
 * - caches the highlighted HTML in `node_modules/.cache/svp-code/` (CI keeps it with
 *   actions/cache), keyed by the preview's source plus everything else the output depends on
 *   (see `cacheSalt()`);
 * - highlights cache misses in worker threads during `vite build` (see
 *   `scripts/preview-code-worker.js`). In dev it highlights on the main thread, on demand.
 */
function previewCode(themeOptions: ThemeOptions): Plugin {
	const QUERY = '?svp-code'
	const COMPONENTS = ['CopyCode', 'Floating']
	const CACHE_DIR = fileURLToPath(new URL('./node_modules/.cache/svp-code/', import.meta.url))
	let salt: string | undefined
	let isBuild = false
	let pool: ReturnType<typeof highlightPool> | undefined
	/** Cache entries this build used; the others are stale and removed after the build. */
	const used = new Set<string>()

	async function highlight(source: string): Promise<string> {
		salt ??= cacheSalt(themeOptions.highlighter)
		const key = createHash('sha256').update(salt).update(source).digest('hex')
		const entry = join(CACHE_DIR, `${key}.html`)
		used.add(entry)
		try {
			return readFileSync(entry, 'utf8')
		}
		catch {}
		const html = isBuild
			? await (pool ??= highlightPool(themeOptions)).highlight(source)
			: await highlighter(source, 'svelte', '')
		mkdirSync(CACHE_DIR, { recursive: true })
		// Write then rename, so a concurrent build or dev server never reads a partial file.
		const tmp = `${entry}.${process.pid}.tmp`
		writeFileSync(tmp, html)
		renameSync(tmp, entry)
		return html
	}

	return {
		name: 'ulp:preview-code',
		enforce: 'pre',
		configResolved(config) {
			isBuild = config.command === 'build'
		},
		async load(id) {
			if (!id.endsWith(`.svelte${QUERY}`)) return
			const file = id.slice(0, -QUERY.length)
			this.addWatchFile(file)
			// Same a11y suppression SveltePress applies to its Markdown output (shiki sets tabindex="0").
			const html = (await highlight(readFileSync(file, 'utf8')))
				.replace(/<pre\s[^>]*tabindex="0"/g, '<!-- svelte-ignore a11y_no_noninteractive_tabindex -->$&')
			const components = COMPONENTS.filter(c => html.includes(`<${c}`))
			const imports = components.length ? `import { ${components.join(', ')} } from '@sveltepress/theme-default/components'` : ''
			return `<script>\n${imports}\n</script>\n${html}\n`
		},
		async closeBundle() {
			await pool?.close()
			pool = undefined
			// A build loads every preview, so entries it didn't use belong to old sources.
			if (!isBuild || used.size === 0) return
			for (const name of readdirSync(CACHE_DIR)) {
				if (!used.has(join(CACHE_DIR, name))) rmSync(join(CACHE_DIR, name), { force: true })
			}
		},
	}
}

/**
 * Everything besides the preview's source that the highlighted output depends on: the
 * highlighter options, the installed packages (twoslash hovers show their types) and our
 * patches to them. Bump the version string when the cached format changes.
 */
function cacheSalt(highlighterOptions: unknown): string {
	const hash = createHash('sha256')
		.update('svp-code v1\0')
		.update(`${process.cwd()}\0`)
		.update(`${JSON.stringify(highlighterOptions)}\0`)
		.update(readFileSync(new URL('./pnpm-lock.yaml', import.meta.url)))
	const patches = fileURLToPath(new URL('./patches/', import.meta.url))
	const files = readdirSync(patches, { recursive: true, withFileTypes: true })
		.filter(entry => entry.isFile())
		.map(entry => join(entry.parentPath, entry.name))
		.sort()
	for (const file of files) hash.update(`${file}\0`).update(readFileSync(file))
	return hash.digest('hex')
}

/**
 * Worker threads running the theme's highlighter (`scripts/preview-code-worker.js`), one job
 * per worker at a time. Idle workers are unref'd so they never keep the process alive.
 */
function highlightPool(themeOptions: ThemeOptions) {
	type Job = { source: string, resolve: (html: string) => void, reject: (error: Error) => void }
	const size = Math.max(1, Math.min(availableParallelism() - 1, 6))
	const queue: Job[] = []
	const idle: Worker[] = []
	const busy = new Map<Worker, Job>()
	let failure: Error | undefined
	let closing = false

	function fail(error: Error) {
		failure ??= error
		for (const job of [...busy.values(), ...queue.splice(0)]) job.reject(failure)
		busy.clear()
	}

	function next(worker: Worker) {
		const job = queue.shift()
		if (!job) {
			worker.unref()
			idle.push(worker)
			return
		}
		busy.set(worker, job)
		worker.ref()
		worker.postMessage({ code: job.source })
	}

	const workers = Array.from({ length: size }, () => {
		const worker = new Worker(new URL('./scripts/preview-code-worker.js', import.meta.url), {
			workerData: { themeOptions },
		})
		worker.on('message', ({ html, error }: { html?: string, error?: string }) => {
			const job = busy.get(worker)
			busy.delete(worker)
			if (error !== undefined) job?.reject(new Error(error))
			else job?.resolve(html ?? '')
			next(worker)
		})
		worker.on('error', fail)
		worker.on('exit', (code) => {
			if (!closing) fail(new Error(`preview-code worker exited with code ${code}`))
		})
		next(worker)
		return worker
	})

	return {
		highlight(source: string) {
			return new Promise<string>((resolve, reject) => {
				if (failure) return reject(failure)
				queue.push({ source, resolve, reject })
				const worker = idle.pop()
				if (worker) next(worker)
			})
		},
		async close() {
			closing = true
			await Promise.all(workers.map(worker => worker.terminate()))
		},
	}
}

/** Sidebar entries for every library or tool, read from the data files (name + id). */
function dataSidebar(kind: 'libraries' | 'tools') {
	const dir = new URL(`./src/lib/data/${kind}/`, import.meta.url)
	return readdirSync(dir)
		.filter(f => f.endsWith('.ts'))
		.map((f) => {
			const src = readFileSync(new URL(f, dir), 'utf8')
			const name = src.match(/\bname:\s*'([^']+)'/)?.[1] ?? f.replace(/\.ts$/, '')
			return { title: name, to: `/${kind}/${f.replace(/\.ts$/, '')}/` }
		})
		.sort((a, b) => a.title.localeCompare(b.title))
}

const browseSidebar = [
	{
		title: 'Browse',
		items: [
			{ title: 'All libraries', to: '/libraries/' },
			{ title: 'Components', to: '/components/' },
			{ title: 'Compare', to: '/compare/' },
			{ title: 'Port between libraries', to: '/port/' },
			{ title: 'Tools', to: '/tools/' },
		],
	},
	{ title: 'Libraries', collapsible: true, items: dataSidebar('libraries') },
]

/** Tools pages also list every tool; elsewhere the sidebar stays focused on libraries. */
const toolsSidebar = [...browseSidebar, { title: 'Tools', collapsible: true, items: dataSidebar('tools') }]

/**
 * Deploy base path. Empty for local dev and root-domain hosting; set BASE_PATH=/RepoName
 * for GitHub Pages project sites (the deploy workflow does this).
 */
const BASE = (process.env.BASE_PATH ?? '') as '' | `/${string}`

const REPO = 'https://github.com/AJayClauGermany/SvelteUILibraryPicker'

/**
 * The theme's layout stores (the "On this page" anchors its Toc renders) live in a file its
 * package.json doesn't export. Alias it so dynamic pages can fill the TOC the way Markdown
 * pages do (see `#lib/components/PageMeta.svelte`). Typed in `src/theme-layout.d.ts`.
 */
const THEME_LAYOUT = fileURLToPath(new URL('./layout.js', import.meta.resolve('@sveltepress/theme-default/PageLayout.svelte')))

const themeOptions: ThemeOptions = {
	navbar: [
		{ title: 'Libraries', to: '/libraries/' },
		{ title: 'Components', to: '/components/' },
		{ title: 'Compare', to: '/compare/' },
		{ title: 'Port', to: '/port/' },
		{ title: 'Guide', to: '/guide/about/' },
		{ title: 'Tools', to: '/tools/' },
	],
	sidebar: {
		'/libraries/': browseSidebar,
		'/components/': browseSidebar,
		'/compare/': browseSidebar,
		'/port/': browseSidebar,
		'/tools/': toolsSidebar,
		'/guide/': [
			{
				title: 'Guide',
				items: [
					{ title: 'About & principles', to: '/guide/about/' },
					{ title: 'Features & tooling', to: '/guide/features/' },
					{ title: 'Licenses & AI policy', to: '/guide/licenses-and-ai/' },
					{ title: 'Contributing', to: '/guide/contributing/' },
				],
			},
		],
	},
	// Type hovers (twoslash) on `ts` and `svelte` code blocks, including preview cards.
	// `noErrors`: twoslash type-checks snippets in its own TS setup, where some library
	// types don't resolve as they do in the real build; we want hovers, not diagnostics.
	highlighter: { twoslash: { handbookOptions: { noErrors: true } } },
	github: REPO,
	editLink: `${REPO}/edit/main/src/routes/:route`,
	logo: '/logo.svg',
}

export default defineConfig({
	resolve: { alias: { '#theme-layout': THEME_LAYOUT } },
	plugins: [
		previewsDevServer(),
		previewCode(themeOptions),
		sveltepress({
			theme: defaultTheme(themeOptions),
			siteConfig: {
				title: 'Svelte UI Library Picker',
				description:
					'Compare Svelte UI libraries side by side — features, Svelte version support, components and default styles — with links back to every official doc.',
			},
			// SvelteKit 3 reads its config from here (svelte.config.js is not used).
			svelteKitOptions: {
				preprocess: [vitePreprocess()],
				adapter: adapter({ pages: 'dist' }),
				paths: { base: BASE },
				prerender: {
					handleMissingId: 'warn',
					// /preview/ is a separate static app built after the site (see previews/).
					handleHttpError: ({ path, message }) => {
						if (path.startsWith(`${BASE}/preview/`)) return
						throw new Error(message)
					},
				},
			},
		}),
	],
})
