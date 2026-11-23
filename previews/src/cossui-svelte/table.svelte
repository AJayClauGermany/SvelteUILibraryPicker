<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/table
-->
<script lang="ts">
	import './styles.css'
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableFooter,
		TableHead,
		TableHeader,
		TableRow,
	} from './ui/table/index.ts'

	const rows = [
		{ item: 'Notebook', qty: 3, price: '$12.00' },
		{ item: 'Pencils', qty: 10, price: '$4.50' },
		{ item: 'Backpack', qty: 1, price: '$39.00' },
	]
</script>

<Table>
	<TableCaption>Recent order</TableCaption>
	<TableHeader>
		<TableRow>
			<TableHead>Item</TableHead>
			<TableHead>Qty</TableHead>
			<TableHead class="text-right">Price</TableHead>
		</TableRow>
	</TableHeader>
	<TableBody>
		{#each rows as row (row.item)}
			<TableRow>
				<TableCell>{row.item}</TableCell>
				<TableCell>{row.qty}</TableCell>
				<TableCell class="text-right">{row.price}</TableCell>
			</TableRow>
		{/each}
	</TableBody>
	<TableFooter>
		<TableRow>
			<TableCell colspan={2}>Total</TableCell>
			<TableCell class="text-right">$55.50</TableCell>
		</TableRow>
	</TableFooter>
</Table>
