<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The previous and next triggers use text glyphs instead of an icon package.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/pagination
-->
<script lang="ts">
	import './styles.css'
	import { Pagination } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	let page = $state(1)
</script>

<Pagination count={120} pageSize={10} {page} onPageChange={(details) => (page = details.page)}>
	<Pagination.PrevTrigger aria-label="Previous page">‹</Pagination.PrevTrigger>
	<Pagination.Context>
		{#snippet children(pagination)}
			{#each pagination().pages as item, index (item.type === 'page' ? item.value : 'e' + index)}
				{#if item.type === 'page'}
					<Pagination.Item {...item}>{item.value}</Pagination.Item>
				{:else}
					<Pagination.Ellipsis {index}>…</Pagination.Ellipsis>
				{/if}
			{/each}
		{/snippet}
	</Pagination.Context>
	<Pagination.NextTrigger aria-label="Next page">›</Pagination.NextTrigger>
</Pagination>

<p>Page {page}</p>
