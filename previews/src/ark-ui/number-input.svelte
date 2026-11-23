<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/number-input
-->
<script lang="ts">
	import { NumberInput } from '@ark-ui/svelte/number-input'
</script>

<NumberInput.Root defaultValue="3" min={0} max={10}>
	<NumberInput.Label>Quantity</NumberInput.Label>
	<NumberInput.Control>
		<NumberInput.DecrementTrigger>−</NumberInput.DecrementTrigger>
		<NumberInput.Input />
		<NumberInput.IncrementTrigger>+</NumberInput.IncrementTrigger>
	</NumberInput.Control>
</NumberInput.Root>
