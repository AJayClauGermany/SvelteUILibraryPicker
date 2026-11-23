<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/pagination
-->
<script lang="ts">
	import './styles.css'
	import { PaginationNav } from 'flowbite-svelte'

	let page = $state(3)
</script>

<PaginationNav currentPage={page} totalPages={10} onPageChange={(p) => (page = p)} />
<p>Page {page} of 10</p>
