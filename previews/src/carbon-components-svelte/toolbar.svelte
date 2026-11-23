<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Toolbar
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import {
		Button,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarMenuItem,
		ToolbarSearch,
	} from 'carbon-components-svelte'

	const headers = [
		{ key: 'name', value: 'Name' },
		{ key: 'status', value: 'Status' },
	]
	const rows = [
		{ id: 'a', name: 'Server 1', status: 'Active' },
		{ id: 'b', name: 'Server 2', status: 'Stopped' },
	]
</script>

<DataTable {headers} {rows}>
	<Toolbar>
		<ToolbarContent>
			<ToolbarSearch />
			<ToolbarMenu>
				<ToolbarMenuItem>Restart all</ToolbarMenuItem>
				<ToolbarMenuItem>Export</ToolbarMenuItem>
			</ToolbarMenu>
			<Button>Add server</Button>
		</ToolbarContent>
	</Toolbar>
</DataTable>
