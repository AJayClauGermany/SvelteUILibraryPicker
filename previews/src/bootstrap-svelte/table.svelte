<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/table
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Table } from '@winkintel/bootstrap-svelte'

	const plans = [
		{ name: 'Starter', seats: 3, price: '$9' },
		{ name: 'Team', seats: 10, price: '$29' },
		{ name: 'Business', seats: 50, price: '$99' },
	]
</script>

<Table.Root>
	<Table.Head>
		<Table.Row>
			<Table.Header>Plan</Table.Header>
			<Table.Header>Seats</Table.Header>
			<Table.Header>Price</Table.Header>
		</Table.Row>
	</Table.Head>
	<Table.Body>
		{#each plans as plan (plan.name)}
			<Table.Row>
				<Table.Header>{plan.name}</Table.Header>
				<Table.Data>{plan.seats}</Table.Data>
				<Table.Data>{plan.price}</Table.Data>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
