import { fileURLToPath } from 'node:url'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

/**
 * Builds the isolated preview app into dist/preview (run after the site build).
 * In dev it is mounted into the site's dev server at /preview/ by the plugin in
 * the root vite.config.ts.
 */
export default defineConfig({
	root: fileURLToPath(new URL('.', import.meta.url)),
	base: '/preview/',
	plugins: [svelte()],
	cacheDir: fileURLToPath(new URL('../node_modules/.vite-previews', import.meta.url)),
	// Pre-bundle every preview's deps up front so the first load in dev doesn't 504.
	optimizeDeps: { entries: ['main.ts', 'src/**/*.svelte'] },
	build: {
		outDir: fileURLToPath(new URL('../dist/preview', import.meta.url)),
		emptyOutDir: true,
	},
})
