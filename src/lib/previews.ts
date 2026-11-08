/**
 * Which live previews exist.
 *
 * A preview is `previews/src/<library-id>/<component-id>.svelte`: a minimal usage of
 * that library's component with its DEFAULT styling (no styles of ours). Previews are
 * rendered by the standalone app in `previews/` (served at /preview/) and embedded via
 * <iframe>, so libraries' CSS never collides with each other or with this site.
 * See docs/previews.md.
 */
import type { Component } from 'svelte'

// Lazy `?svp-code` modules (see `previewCode()` in vite.config.ts): the site only needs the
// file list up front, and the highlighted source component when a card is flipped. It never
// pulls library code into the site.
const files = import.meta.glob<{ default: Component }>('/previews/src/*/*.svelte', { query: '?svp-code' })

function keyOf(path: string) {
	const [, library = '', component = ''] = path.match(/\/previews\/src\/([^/]+)\/([^/]+)\.svelte$/) ?? []
	return { library, component }
}

export const previews = Object.keys(files).map(keyOf)

export function hasPreview(library: string, component: string): boolean {
	return `/previews/src/${library}/${component}.svelte` in files
}

/** Component rendering a preview file's source as a highlighted SveltePress code block. */
export function loadPreviewCode(library: string, component: string): Promise<Component> {
	const load = files[`/previews/src/${library}/${component}.svelte`]
	return load ? load().then(m => m.default) : Promise.reject(new Error(`No preview for ${library}/${component}`))
}

/** Path of a preview page, WITHOUT the base path; wrap it in `url()` from `#lib/url.ts`. */
export function previewPath(library: string, component: string): string {
	return `/preview/?library=${encodeURIComponent(library)}&component=${encodeURIComponent(component)}`
}
