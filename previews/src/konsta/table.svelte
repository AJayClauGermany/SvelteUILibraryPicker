<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/data-table
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Table, TableBody, TableCell, TableHead, TableRow } from 'konsta/svelte'

	const rows = [
		{ name: 'Apples', stock: 24, price: '1.20' },
		{ name: 'Bread', stock: 8, price: '2.50' },
		{ name: 'Cheese', stock: 15, price: '4.80' },
	]
</script>

<App>
	<Block>
		<Table>
			<TableHead>
				<TableRow header>
					<TableCell header>Item</TableCell>
					<TableCell header>Stock</TableCell>
					<TableCell header>Price</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{#each rows as row (row.name)}
					<TableRow>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.stock}</TableCell>
						<TableCell>{row.price}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</Block>
</App>
