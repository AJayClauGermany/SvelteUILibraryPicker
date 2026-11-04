import { fileURLToPath } from 'node:url'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
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
export default defineConfig({
	root: fileURLToPath(new URL('.', import.meta.url)),
	// Must match the site's base path (see BASE_PATH in the root vite.config.ts).
	base: `${process.env.BASE_PATH ?? ''}/preview/`,
	// Tailwind must come before svelte(), as the @tailwindcss/vite docs require.
	// functionsMixins compiles the CSS `@mixin`/`@function` syntax M3 Svelte's styles use
	// (its quick start puts it right after svelte() and lists the package in `deps`).
	plugins: [tailwindcss(), svelte(), functionsMixins({ deps: ['m3-svelte'] })],
	cacheDir: fileURLToPath(new URL('../node_modules/.vite-previews', import.meta.url)),
	// Pre-bundle every preview's deps up front so the first load in dev doesn't 504.
	optimizeDeps: { entries: ['main.ts', 'src/**/*.svelte'] },
	build: {
		outDir: fileURLToPath(new URL('../dist/preview', import.meta.url)),
		emptyOutDir: true,
	},
})
