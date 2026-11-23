<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/content-tables--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Table } from '@sveltestrap/sveltestrap'

	const people = [
		{ name: 'Ada', role: 'Engineer', city: 'London' },
		{ name: 'Grace', role: 'Admiral', city: 'New York' },
		{ name: 'Alan', role: 'Researcher', city: 'Manchester' },
	]
</script>

<Table striped hover>
	<thead>
		<tr>
			<th>Name</th>
			<th>Role</th>
			<th>City</th>
		</tr>
	</thead>
	<tbody>
		{#each people as person (person.name)}
			<tr>
				<td>{person.name}</td>
				<td>{person.role}</td>
				<td>{person.city}</td>
			</tr>
		{/each}
	</tbody>
</Table>
