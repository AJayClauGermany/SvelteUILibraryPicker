<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/pin-input
-->
<script lang="ts">
	import * as pinInput from '@zag-js/pin-input'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(pinInput.machine, { id, count: 4 })
	const api = $derived(pinInput.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Verification code</label>
	<div {...api.getControlProps()}>
		{#each api.items as index (index)}
			<input {...api.getInputProps({ index })} />
		{/each}
	</div>
	<input {...api.getHiddenInputProps()} />
</div>
<button onclick={api.clearValue}>Clear</button>
