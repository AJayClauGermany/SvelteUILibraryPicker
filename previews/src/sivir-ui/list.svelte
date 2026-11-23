<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/reorder-list
-->
<script lang="ts">
	import './styles.css'
	import { ReorderList } from '@sivir-ui/svelte/components/reorder-list'

	type Task = { id: string; name: string }

	let items = $state<Task[]>([
		{ id: 'draft', name: 'Write the draft' },
		{ id: 'review', name: 'Ask for review' },
		{ id: 'publish', name: 'Publish the post' }
	])
</script>

<div class="w-full max-w-md">
	<ReorderList bind:items getId={(item) => item.id} getLabel={(item) => item.name} label="Tasks">
		{#snippet children(item)}
			<span class="text-sm">{item.name}</span>
		{/snippet}
	</ReorderList>
</div>
