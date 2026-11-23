<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/pagination
-->
<script lang="ts">
	import './styles.css'
	import * as Pagination from './ui/pagination/index.js'
</script>

<Pagination.Root count={80} perPage={10}>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.Previous />
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
				<Pagination.Next />
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
