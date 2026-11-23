<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/toggle-group
-->
<script lang="ts">
	import { ToggleGroup } from '@ark-ui/svelte/toggle-group'

	let value = $state(['bold'])
</script>

<ToggleGroup.Root bind:value multiple>
	<ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
</ToggleGroup.Root>
<p>Selected: {value.join(', ') || 'none'}</p>
