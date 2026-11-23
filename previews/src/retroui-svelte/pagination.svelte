<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/pagination
-->
<script lang="ts">
	import './styles.css'
	import * as Pagination from './ui/pagination/index.js'
</script>

<Pagination.Root count={80} perPage={10}>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton />
			</Pagination.Item>
			{#each pages as page (page.key)}
				<Pagination.Item>
					{#if page.type === 'ellipsis'}
						<Pagination.Ellipsis />
					{:else}
						<Pagination.Link {page} isActive={currentPage === page.value} />
					{/if}
				</Pagination.Item>
			{/each}
			<Pagination.Item>
				<Pagination.NextButton />
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
