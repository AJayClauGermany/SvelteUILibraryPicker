<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/pin-input
-->
<script lang="ts">
	import { createPinInput } from '@melt-ui/svelte'

	const {
		elements: { root, input, hiddenInput },
	} = createPinInput({ placeholder: '-' })
</script>

<div {...$root} use:root>
	{#each [0, 1, 2, 3] as digit (digit)}
		<input {...$input()} use:input aria-label="Digit {digit + 1}" />
	{/each}
	<input {...$hiddenInput} use:hiddenInput />
</div>
