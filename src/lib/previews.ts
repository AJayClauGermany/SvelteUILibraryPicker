/**
 * Which live previews exist.
 *
 * A preview is `previews/src/<library-id>/<component-id>.svelte`: a minimal usage of
 * that library's component with its DEFAULT styling (no styles of ours). Previews are
 * rendered by the standalone app in `previews/` (served at /preview/) and embedded via
 * <iframe>, so libraries' CSS never collides with each other or with this site.
 * See docs/previews.md.
 */

// `?raw` + lazy: the site only needs the file list up front, and the source text (for the
// code side of a preview card) on demand; it never pulls library code into the site.
const files = import.meta.glob('/previews/src/*/*.svelte', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>

function keyOf(path: string) {
	const [, library = '', component = ''] = path.match(/\/previews\/src\/([^/]+)\/([^/]+)\.svelte$/) ?? []
	return { library, component }
}

export const previews = Object.keys(files).map(keyOf)

export function hasPreview(library: string, component: string): boolean {
	return `/previews/src/${library}/${component}.svelte` in files
}

/** Source of a preview file, as written (the whole `.svelte` file including its header comment). */
export function loadPreviewSource(library: string, component: string): Promise<string> {
	const load = files[`/previews/src/${library}/${component}.svelte`]
	return load ? load() : Promise.reject(new Error(`No preview for ${library}/${component}`))
}

/** Path of a preview page, WITHOUT the base path; wrap it in `url()` from `#lib/url.ts`. */
export function previewPath(library: string, component: string): string {
	return `/preview/?library=${encodeURIComponent(library)}&component=${encodeURIComponent(component)}`
}
