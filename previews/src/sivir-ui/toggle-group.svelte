<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/toggle-group
-->
<script lang="ts">
	import './styles.css'
	import * as ToggleGroup from '@sivir-ui/svelte/components/toggle-group'

	let size = $state('medium')
</script>

<ToggleGroup.Root type="single" bind:value={size}>
	<ToggleGroup.Item value="small">Small</ToggleGroup.Item>
	<ToggleGroup.Item value="medium">Medium</ToggleGroup.Item>
	<ToggleGroup.Item value="large">Large</ToggleGroup.Item>
</ToggleGroup.Root>
