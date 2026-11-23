<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/pin-input
-->
<script lang="ts">
	import { PinInput } from 'melt/builders'

	const pin = new PinInput({ maxLength: 4, type: 'numeric' })
</script>

<div {...pin.root}>
	{#each pin.inputs as input, i (i)}
		<input {...input} />
	{/each}
</div>
<p>Value: {pin.value}</p>
