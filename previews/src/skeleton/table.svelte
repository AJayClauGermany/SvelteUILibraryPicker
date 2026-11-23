<!--
  Skeleton has no Table component: tables are the `table` and `table-wrap` classes on a
  plain <table>, which IS its default. ./styles.css loads Skeleton's cerberus theme.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/tables
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	const rows = [
		{ name: 'Hydrogen', symbol: 'H', weight: 1.008 },
		{ name: 'Helium', symbol: 'He', weight: 4.0026 },
		{ name: 'Lithium', symbol: 'Li', weight: 6.94 },
	]
</script>

<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Element</th>
				<th>Symbol</th>
				<th>Atomic weight</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.symbol)}
				<tr>
					<td>{row.name}</td>
					<td>{row.symbol}</td>
					<td>{row.weight}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
