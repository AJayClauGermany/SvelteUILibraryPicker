<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/pagination
-->
<script lang="ts">
	import { Pagination } from '@ark-ui/svelte/pagination'
</script>

<Pagination.Root count={120} defaultPageSize={10} siblingCount={1}>
	<Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
	<Pagination.Context>
		{#snippet render(pagination)}
			{#each pagination().pages as page, index (index)}
				{#if page.type === 'page'}
					<Pagination.Item {...page}>{page.value}</Pagination.Item>
				{:else}
					<Pagination.Ellipsis {index}>…</Pagination.Ellipsis>
				{/if}
			{/each}
		{/snippet}
	</Pagination.Context>
	<Pagination.NextTrigger>Next</Pagination.NextTrigger>
</Pagination.Root>
