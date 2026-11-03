import { resolve } from '$app/paths'

/**
 * Prefix an internal path with the deploy base path (e.g. `/SvelteUILibraryPicker` on
 * GitHub Pages, empty locally). Use this for every internal href in Svelte code;
 * hard-coded `/foo/` links break on sub-path deployments.
 */
export function url(path: string): string {
	return (resolve as (path: string) => string)(path)
}
