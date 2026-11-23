<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/table
-->
<script lang="ts">
	import './styles.css'
	import * as Table from './ui/table/index.js'

	const orders = [
		{ id: 'A-102', status: 'Shipped', total: '$48.00' },
		{ id: 'A-103', status: 'Processing', total: '$125.50' },
		{ id: 'A-104', status: 'Delivered', total: '$19.99' }
	]
</script>

<Table.Root>
	<Table.Caption>Recent orders</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Order</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head class="text-right">Total</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each orders as order (order.id)}
			<Table.Row>
				<Table.Cell class="font-medium">{order.id}</Table.Cell>
				<Table.Cell>{order.status}</Table.Cell>
				<Table.Cell class="text-right">{order.total}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
