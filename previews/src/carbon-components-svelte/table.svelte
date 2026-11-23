<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/DataTable
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { DataTable } from 'carbon-components-svelte'

	const headers = [
		{ key: 'name', value: 'Name' },
		{ key: 'role', value: 'Role' },
		{ key: 'status', value: 'Status' },
	] as const

	const rows = [
		{ id: 'a', name: 'Ada', role: 'Engineer', status: 'Active' },
		{ id: 'b', name: 'Grace', role: 'Admiral', status: 'Away' },
		{ id: 'c', name: 'Alan', role: 'Researcher', status: 'Active' },
	] as const
</script>

<DataTable sortable title="Team" description="People with access to this project." {headers} {rows} />
