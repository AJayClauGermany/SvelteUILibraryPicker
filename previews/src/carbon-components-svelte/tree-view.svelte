<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/TreeView
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { TreeView } from 'carbon-components-svelte'

	const nodes = [
		{
			id: 'src',
			text: 'src',
			nodes: [
				{ id: 'lib', text: 'lib', nodes: [{ id: 'utils', text: 'utils.ts' }] },
				{ id: 'app-html', text: 'app.html' },
			],
		},
		{ id: 'static', text: 'static', nodes: [{ id: 'favicon', text: 'favicon.png' }] },
		{ id: 'readme', text: 'README.md' },
	]
</script>

<TreeView labelText="Project files" {nodes} expandedIds={['src', 'lib']} selectedIds={['utils']} />
