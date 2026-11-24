<!--
  TanStack Table is headless: it computes rows, headers and cells, and you write the markup.
  This preview is a plain unstyled <table> on purpose; that IS its default look.
  Docs: https://tanstack.com/table/latest/docs/framework/svelte/quick-start
-->
<script lang="ts">
	import { createTable, FlexRender, tableFeatures } from '@tanstack/svelte-table'

	type Planet = { name: string; moons: number; ringed: string }

	const features = tableFeatures({})
	const columns = [
		{ accessorKey: 'name', header: 'Planet' },
		{ accessorKey: 'moons', header: 'Moons' },
		{ accessorKey: 'ringed', header: 'Rings' },
	]
	const data: Planet[] = [
		{ name: 'Mercury', moons: 0, ringed: 'No' },
		{ name: 'Earth', moons: 1, ringed: 'No' },
		{ name: 'Saturn', moons: 146, ringed: 'Yes' },
	]

	const table = createTable({ features, columns, data })
</script>

<table>
	<thead>
		{#each table.getHeaderGroups() as group (group.id)}
			<tr>
				{#each group.headers as header (header.id)}
					<th>
						{#if !header.isPlaceholder}<FlexRender {header} />{/if}
					</th>
				{/each}
			</tr>
		{/each}
	</thead>
	<tbody>
		{#each table.getRowModel().rows as row (row.id)}
			<tr>
				{#each row.getAllCells() as cell (cell.id)}
					<td><FlexRender {cell} /></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
