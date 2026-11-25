import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { functionsMixins } from 'vite-plugin-functions-mixins'

/**
 * Builds the isolated preview app into dist/preview (run after the site build).
 * In dev it is mounted into the site's dev server at /preview/ by the plugin in
 * the root vite.config.ts.
 *
 * Tailwind v4 runs here only (never in the site build). Each Tailwind-based library has
 * its own CSS entry (`src/<lib>/styles.css`) with `source(none)` plus `@source` limited to
 * that library's folder and package, so utilities and themes never mix between libraries.
 */
/**
 * svelte-5-ui-lib 0.12.6 imports its own index as a bare directory (`from '..'` or
 * `from '../..'` in Theme, Alert, Badge, Avatar, Toast, Banner, InputAddon and others). Vite's
 * dev server resolves that to dist/index.js, but the production bundler applies the package's
 * `main` ("dist/index.js") relative to dist/ and fails on dist/dist/index.js. Point those imports
 * at dist/index.js, which is what the directory import means. Drop this once upstream uses an
 * explicit path.
 */
function svelte5UiLibDirectoryImport(): Plugin {
	return {
		name: 'ulp:svelte-5-ui-lib-directory-import',
		enforce: 'pre',
		resolveId(source, importer) {
			const dist = importer?.match(/^(.*\/svelte-5-ui-lib\/dist)\//)?.[1]
			if (!dist || !/^\.\.(?:\/\.\.)*\/?$/.test(source)) return
			if (resolve(dirname(importer!), source) === dist) return `${dist}/index.js`
		},
	}
}

export default defineConfig({
	root: fileURLToPath(new URL('.', import.meta.url)),
	// Must match the site's base path (see BASE_PATH in the root vite.config.ts).
	base: `${process.env.BASE_PATH ?? ''}/preview/`,
	// Tailwind must come before svelte(), as the @tailwindcss/vite docs require.
	// functionsMixins compiles the CSS `@mixin`/`@function` syntax M3 Svelte's styles use
	// (its quick start puts it right after svelte() and lists the package in `deps`).
	plugins: [svelte5UiLibDirectoryImport(), tailwindcss(), svelte(), functionsMixins({ deps: ['m3-svelte'] })],
	cacheDir: fileURLToPath(new URL('../node_modules/.vite-previews', import.meta.url)),
	// Pre-bundle every preview's deps up front so the first load in dev doesn't 504.
	// svelte-maplibre-gl/vite imports MapLibre's worker with `?worker&url`, which pre-bundling
	// cannot load, so the package is served as is.
	optimizeDeps: { entries: ['main.ts', 'src/**/*.svelte'], exclude: ['svelte-maplibre-gl'] },
	build: {
		outDir: fileURLToPath(new URL('../dist/preview', import.meta.url)),
		emptyOutDir: true,
	},
})
