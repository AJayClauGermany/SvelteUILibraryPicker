<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. This is the plain Table; the
  data table examples (on @tanstack/table-core) are not shown.
  Docs: https://originui-svelte.pages.dev/tables
-->
<script lang="ts">
	import './styles.css'
	import * as Table from './ui/table/index.js'

	const invoices = [
		{ id: 'INV-001', status: 'Paid', amount: '$250.00' },
		{ id: 'INV-002', status: 'Pending', amount: '$150.00' },
		{ id: 'INV-003', status: 'Unpaid', amount: '$350.00' },
	]
</script>

<Table.Root>
	<Table.Caption>Recent invoices</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Invoice</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each invoices as invoice (invoice.id)}
			<Table.Row>
				<Table.Cell>{invoice.id}</Table.Cell>
				<Table.Cell>{invoice.status}</Table.Cell>
				<Table.Cell>{invoice.amount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
	<Table.Footer>
		<Table.Row>
			<Table.Cell colspan={2}>Total</Table.Cell>
			<Table.Cell>$750.00</Table.Cell>
		</Table.Row>
	</Table.Footer>
</Table.Root>
