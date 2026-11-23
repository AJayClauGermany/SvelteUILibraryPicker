<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/pin-input
-->
<script lang="ts">
	import { PinInput } from 'bits-ui'

	let value = $state('12')
</script>

<PinInput.Root bind:value maxlength={4}>
	{#snippet children({ cells })}
		{#each cells as cell, i (i)}
			<PinInput.Cell {cell}>{cell.char ?? '_'}</PinInput.Cell>
		{/each}
	{/snippet}
</PinInput.Root>
<p>Value: {value}</p>
