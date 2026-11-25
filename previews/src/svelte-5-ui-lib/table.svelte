<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/table/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'svelte-5-ui-lib'

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
