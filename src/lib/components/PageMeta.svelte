<script lang="ts">
	/**
	 * Per-page <title>/description for dynamic routes.
	 *
	 * SveltePress' PageLayout writes the <title> from static frontmatter, which dynamic
	 * routes (e.g. /libraries/[id]) can't provide. We emit marker metas that
	 * `src/hooks.server.ts` swaps into the prerendered HTML, and update
	 * `document.title` on client-side navigation.
	 */
	import { tick } from 'svelte'

	const { title, description }: { title: string, description: string } = $props()
	const full = $derived(`${title} - Svelte UI Library Picker`)

	$effect(() => {
		const value = full
		tick().then(() => (document.title = value))
	})
</script>

<svelte:head>
	<meta name="ulp:title" content={full} />
	<meta name="ulp:description" content={description} />
</svelte:head>
