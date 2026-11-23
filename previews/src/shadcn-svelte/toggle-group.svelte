<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/toggle-group
-->
<script lang="ts">
	import './styles.css'
	import * as ToggleGroup from './ui/toggle-group/index.js'

	let view = $state('list')
</script>

<ToggleGroup.Root type="single" variant="outline" bind:value={view}>
	<ToggleGroup.Item value="list">List</ToggleGroup.Item>
	<ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
	<ToggleGroup.Item value="board">Board</ToggleGroup.Item>
</ToggleGroup.Root>
