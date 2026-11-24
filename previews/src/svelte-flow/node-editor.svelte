<!--
  Svelte Flow's default stylesheet (style.css, as the quick start requires) with its built-in node
  types, Controls and Background, unchanged. The flow takes its parent's size, so the parent gets a
  height. Svelte Flow v2 takes its colour mode from a data-theme or dark/light class higher up, else
  from the OS; its documented forceColorMode prop is set to the preview's light/dark mode (see
  previews/theme.svelte.ts). Sample data is our own and inline, so nothing is fetched.
  Docs: https://svelteflow.dev/learn
-->
<script lang="ts">
	import { Background, Controls, SvelteFlow, type Edge, type Node } from '@xyflow/svelte'
	import '@xyflow/svelte/style.css'
	import { theme } from '../../theme.svelte.ts'

	let nodes = $state.raw<Node[]>([
		{ id: 'draft', type: 'input', position: { x: 0, y: 0 }, data: { label: 'Draft' } },
		{ id: 'review', position: { x: -90, y: 100 }, data: { label: 'Review' } },
		{ id: 'test', position: { x: 90, y: 100 }, data: { label: 'Test' } },
		{ id: 'ship', type: 'output', position: { x: 0, y: 200 }, data: { label: 'Ship' } },
	])

	let edges = $state.raw<Edge[]>([
		{ id: 'draft-review', source: 'draft', target: 'review' },
		{ id: 'draft-test', source: 'draft', target: 'test', animated: true },
		{ id: 'review-ship', source: 'review', target: 'ship' },
		{ id: 'test-ship', source: 'test', target: 'ship', label: 'passes' },
	])
</script>

<div style="height: 320px">
	<SvelteFlow bind:nodes bind:edges fitView forceColorMode={theme.current}>
		<Controls />
		<Background />
	</SvelteFlow>
</div>
