<script lang="ts">
	/**
	 * Per-page metadata for dynamic routes: <title>, description and the "On this page" list.
	 *
	 * SveltePress' PageLayout takes these from static frontmatter, which dynamic routes
	 * (e.g. /libraries/[id]) can't provide. For the title we emit marker metas that
	 * `src/hooks.server.ts` swaps into the prerendered HTML, and update `document.title` on
	 * client-side navigation. For the TOC we feed the theme's own `anchors` store, so the
	 * theme's Toc renders it exactly as on Markdown pages.
	 */
	import type { Anchor } from '#theme-layout'
	import { anchors as tocAnchors } from '#theme-layout'
	import { tick, untrack } from 'svelte'

	interface Props {
		title: string
		description: string
		/** Headings to list under "On this page"; each `slugId` must be an id on the page. */
		anchors?: Anchor[]
	}

	const { title, description, anchors = [] }: Props = $props()
	const full = $derived(`${title} - Svelte UI Library Picker`)

	// Set during init so the prerendered HTML (and hydration) already has the TOC. PageLayout
	// resets the store from its static frontmatter in an effect, so set it again after that.
	tocAnchors.set(untrack(() => anchors))

	$effect(() => {
		const value = full
		const list = anchors
		tick().then(() => {
			document.title = value
			tocAnchors.set(list)
		})
	})
</script>

<svelte:head>
	<meta name="ulp:title" content={full} />
	<meta name="ulp:description" content={description} />
</svelte:head>
