<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/number-input
-->
<script lang="ts">
	import * as numberInput from '@zag-js/number-input'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(numberInput.machine, { id, defaultValue: '3', min: 0, max: 10 })
	const api = $derived(numberInput.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Quantity</label>
	<div {...api.getControlProps()}>
		<button {...api.getDecrementTriggerProps()}>−</button>
		<input {...api.getInputProps()} />
		<button {...api.getIncrementTriggerProps()}>+</button>
	</div>
</div>
