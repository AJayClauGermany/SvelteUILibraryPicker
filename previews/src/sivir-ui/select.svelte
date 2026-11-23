<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/select
-->
<script lang="ts">
	import './styles.css'
	import * as Select from '@sivir-ui/svelte/components/select'

	let size = $state('')
</script>

<Select.Root bind:value={size}>
	<Select.Trigger class="min-w-[220px]">
		<Select.Value placeholder="Pick a size" />
	</Select.Trigger>
	<Select.Content>
		<Select.Label>Sizes</Select.Label>
		<Select.Item value="s">Small</Select.Item>
		<Select.Item value="m">Medium</Select.Item>
		<Select.Item value="l">Large</Select.Item>
	</Select.Content>
</Select.Root>
