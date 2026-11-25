<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/pagination
-->
<script lang="ts">
	import { createPagination } from '@melt-ui/svelte'

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range },
	} = createPagination({ count: 80, perPage: 10, defaultPage: 3 })
</script>

<nav {...$root} use:root>
	<p>Items {$range.start + 1} to {$range.end} of 80</p>
	<button {...$prevButton} use:prevButton>Previous</button>
	{#each $pages as page (page.key)}
		{#if page.type === 'ellipsis'}
			<span>…</span>
		{:else}
			<button {...$pageTrigger(page)} use:pageTrigger>{page.value}</button>
		{/if}
	{/each}
	<button {...$nextButton} use:nextButton>Next</button>
</nav>
