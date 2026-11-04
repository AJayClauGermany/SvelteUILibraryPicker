import { readdirSync, readFileSync } from 'node:fs'
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

/** Sidebar entries for every library, read from the data files (name + id). */
function librarySidebar() {
	const dir = new URL('./src/lib/data/libraries/', import.meta.url)
	return readdirSync(dir)
		.filter(f => f.endsWith('.ts'))
		.map((f) => {
			const src = readFileSync(new URL(f, dir), 'utf8')
			const name = src.match(/\bname:\s*'([^']+)'/)?.[1] ?? f.replace(/\.ts$/, '')
			return { title: name, to: `/libraries/${f.replace(/\.ts$/, '')}/` }
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
		],
	},
	{ title: 'Libraries', collapsible: true, items: librarySidebar() },
]

/**
 * Deploy base path. Empty for local dev and root-domain hosting; set BASE_PATH=/RepoName
 * for GitHub Pages project sites (the deploy workflow does this).
 */
const BASE = (process.env.BASE_PATH ?? '') as '' | `/${string}`

const REPO = 'https://github.com/AJayClauGermany/SvelteUILibraryPicker'

export default defineConfig({
	plugins: [
		previewsDevServer(),
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{ title: 'Libraries', to: '/libraries/' },
					{ title: 'Components', to: '/components/' },
					{ title: 'Compare', to: '/compare/' },
					{ title: 'Guide', to: '/guide/about/' },
				],
				sidebar: {
					'/libraries/': browseSidebar,
					'/components/': browseSidebar,
					'/compare/': browseSidebar,
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
