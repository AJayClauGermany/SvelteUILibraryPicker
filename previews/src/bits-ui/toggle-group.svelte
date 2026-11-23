<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/toggle-group
-->
<script lang="ts">
	import { ToggleGroup } from 'bits-ui'

	let value = $state('left')
</script>

<ToggleGroup.Root type="single" bind:value aria-label="Text alignment">
	<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
	<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
	<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup.Root>
<p>Alignment: {value || 'none'}</p>
