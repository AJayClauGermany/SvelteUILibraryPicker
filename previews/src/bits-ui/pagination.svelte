<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/pagination
-->
<script lang="ts">
	import { Pagination } from 'bits-ui'
</script>

<Pagination.Root count={100} perPage={10} page={4}>
	{#snippet children({ pages, range })}
		<Pagination.PrevButton>Prev</Pagination.PrevButton>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>…</span>
			{:else}
				<Pagination.Page {page}>{page.value}</Pagination.Page>
			{/if}
		{/each}
		<Pagination.NextButton>Next</Pagination.NextButton>
		<p>Showing {range.start}–{range.end} of 100</p>
	{/snippet}
</Pagination.Root>
