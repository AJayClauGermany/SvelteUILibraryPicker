<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/pagination
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Pagination } from '@winkintel/bootstrap-svelte'

	const pages = [1, 2, 3, 4, 5]
	let page = $state(2)

	function go(event: Event, next: number) {
		event.preventDefault()
		page = next
	}
</script>

<Pagination.Root aria-label="Results pages" isStateful={false}>
	<Pagination.Item isDisabled={page === 1}>
		<Pagination.Link aria-label="Previous" onclick={(e) => go(e, page - 1)}>&laquo;</Pagination.Link>
	</Pagination.Item>
	{#each pages as n (n)}
		<Pagination.Item isActive={n === page}>
			<Pagination.Link onclick={(e) => go(e, n)}>{n}</Pagination.Link>
		</Pagination.Item>
	{/each}
	<Pagination.Item isDisabled={page === pages.length}>
		<Pagination.Link aria-label="Next" onclick={(e) => go(e, page + 1)}>&raquo;</Pagination.Link>
	</Pagination.Item>
</Pagination.Root>
