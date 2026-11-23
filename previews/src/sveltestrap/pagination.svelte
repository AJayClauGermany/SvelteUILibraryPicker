<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-pagination--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Pagination, PaginationItem, PaginationLink } from '@sveltestrap/sveltestrap'

	let page = $state(2)
	const pages = [1, 2, 3, 4, 5]
</script>

<Pagination ariaLabel="Results pages">
	<PaginationItem disabled={page === 1}>
		<PaginationLink previous href="#" onclick={() => (page = Math.max(1, page - 1))} />
	</PaginationItem>
	{#each pages as p (p)}
		<PaginationItem active={p === page}>
			<PaginationLink href="#" onclick={() => (page = p)}>{p}</PaginationLink>
		</PaginationItem>
	{/each}
	<PaginationItem disabled={page === pages.length}>
		<PaginationLink next href="#" onclick={() => (page = Math.min(pages.length, page + 1))} />
	</PaginationItem>
</Pagination>
