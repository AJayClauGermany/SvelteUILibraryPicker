/**
 * Types for the `#theme-layout` alias (see vite.config.ts): the SveltePress default theme's
 * layout stores. Only what the site uses is declared here.
 */
declare module '#theme-layout' {
	import type { Writable } from 'svelte/store'

	/** One "On this page" entry, as the theme's Markdown pipeline produces them. */
	export interface Anchor {
		slugId: string
		title: string
		depth: number
	}

	/** Anchors the theme's Toc renders for the current page. */
	export const anchors: Writable<Anchor[]>
}
