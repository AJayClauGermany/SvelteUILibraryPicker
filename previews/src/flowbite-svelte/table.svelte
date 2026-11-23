<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/table
-->
<script lang="ts">
	import './styles.css'
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte'

	const rows = [
		{ name: 'Notebook', category: 'Stationery', price: '$4' },
		{ name: 'Desk lamp', category: 'Lighting', price: '$29' },
		{ name: 'Headphones', category: 'Audio', price: '$89' },
	]
</script>

<Table striped hoverable>
	<TableHead>
		<TableHeadCell>Product</TableHeadCell>
		<TableHeadCell>Category</TableHeadCell>
		<TableHeadCell>Price</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each rows as row (row.name)}
			<TableBodyRow>
				<TableBodyCell>{row.name}</TableBodyCell>
				<TableBodyCell>{row.category}</TableBodyCell>
				<TableBodyCell>{row.price}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
