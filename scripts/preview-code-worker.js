/**
 * Worker thread for the `?svp-code` plugin (`previewCode()` in vite.config.ts).
 *
 * Highlighting a preview with twoslash type-checks it, which takes about half a second per
 * file and blocks the thread. During `vite build` the plugin runs several of these workers so
 * the previews are highlighted in parallel. Each worker sets up the theme's own highlighter
 * with the same theme options as the site, so its output matches the main thread's.
 */
import { parentPort, workerData } from 'node:worker_threads'
import { defaultTheme, highlighter, initHighlighter } from '@sveltepress/theme-default'

// `highlighter()` reads the theme options that `defaultTheme()` stores.
defaultTheme(workerData.themeOptions)
const ready = initHighlighter(workerData.themeOptions.highlighter)

parentPort.on('message', async ({ id, code }) => {
	try {
		await ready
		parentPort.postMessage({ id, html: await highlighter(code, 'svelte', '') })
	}
	catch (error) {
		parentPort.postMessage({ id, error: error instanceof Error ? (error.stack ?? error.message) : String(error) })
	}
})
