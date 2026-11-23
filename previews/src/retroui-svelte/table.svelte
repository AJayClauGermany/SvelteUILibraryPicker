<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/table
-->
<script lang="ts">
	import './styles.css'
	import * as Table from './ui/table/index.js'

	const orders = [
		{ id: 'A-101', item: 'Notebook', qty: 2, price: '$8.00' },
		{ id: 'A-102', item: 'Pencil set', qty: 1, price: '$5.50' },
		{ id: 'A-103', item: 'Backpack', qty: 1, price: '$32.00' }
	]
</script>

<Table.Root>
	<Table.Caption>Recent orders.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Order</Table.Head>
			<Table.Head>Item</Table.Head>
			<Table.Head>Qty</Table.Head>
			<Table.Head class="text-right">Price</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each orders as order (order.id)}
			<Table.Row>
				<Table.Cell>{order.id}</Table.Cell>
				<Table.Cell>{order.item}</Table.Cell>
				<Table.Cell>{order.qty}</Table.Cell>
				<Table.Cell class="text-right">{order.price}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
