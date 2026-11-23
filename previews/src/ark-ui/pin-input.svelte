<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/pin-input
-->
<script lang="ts">
	import { PinInput } from '@ark-ui/svelte/pin-input'

	let value = $state<string[]>([])
</script>

<PinInput.Root bind:value count={4} otp>
	<PinInput.Label>Verification code</PinInput.Label>
	<PinInput.Control>
		{#each [0, 1, 2, 3] as index (index)}
			<PinInput.Input {index} />
		{/each}
	</PinInput.Control>
	<PinInput.HiddenInput />
</PinInput.Root>
<p>Entered: {value.join('') || '—'}</p>
