<!--
  svelte-dnd-action is a headless action for sortable lists; it adds no styles of its own beyond
  the drag feedback (a shadow copy and drop-zone outline) it applies while dragging.
  Docs: https://github.com/isaacHagoel/svelte-dnd-action#readme
-->
<script lang="ts">
	import { dndzone, type DndEvent } from 'svelte-dnd-action'

	let items = $state([
		{ id: 1, name: 'Write the outline' },
		{ id: 2, name: 'Draft the first section' },
		{ id: 3, name: 'Ask for a review' },
	])

	function sort(e: CustomEvent<DndEvent<{ id: number, name: string }>>) {
		items = e.detail.items
	}
</script>

<ul use:dndzone={{ items }} onconsider={sort} onfinalize={sort}>
	{#each items as item (item.id)}
		<li>{item.name}</li>
	{/each}
</ul>
