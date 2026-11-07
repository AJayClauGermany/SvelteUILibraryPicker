import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { defaultTheme } from '@sveltepress/theme-default'
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

export default defineConfig({
	resolve: { alias: { '#theme-layout': THEME_LAYOUT } },
	plugins: [
		previewsDevServer(),
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{ title: 'Libraries', to: '/libraries/' },
					{ title: 'Components', to: '/components/' },
					{ title: 'Compare', to: '/compare/' },
					{ title: 'Guide', to: '/guide/about/' },
					{ title: 'Tools', to: '/tools/' },
				],
				sidebar: {
					'/libraries/': browseSidebar,
					'/components/': browseSidebar,
					'/compare/': browseSidebar,
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
				github: REPO,
				editLink: `${REPO}/edit/main/src/routes/:route`,
				logo: '/logo.svg',
			}),
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
