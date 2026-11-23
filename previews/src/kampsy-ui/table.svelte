<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/table
-->
<script lang="ts">
	import './styles.css'
	import { Table } from 'kampsy-ui'

	const invoices = [
		{ id: 'INV-001', status: 'Paid', amount: '$250.00' },
		{ id: 'INV-002', status: 'Pending', amount: '$150.00' },
		{ id: 'INV-003', status: 'Unpaid', amount: '$350.00' }
	]
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Invoice</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body striped>
		{#each invoices as invoice (invoice.id)}
			<Table.Row>
				<Table.Cell>{invoice.id}</Table.Cell>
				<Table.Cell>{invoice.status}</Table.Cell>
				<Table.Cell>{invoice.amount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
