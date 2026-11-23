<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/checkbox
-->
<script lang="ts">
	import * as checkbox from '@zag-js/checkbox'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(checkbox.machine, { id })
	const api = $derived(checkbox.connect(service, normalizeProps))
</script>

<label {...api.getRootProps()}>
	<div {...api.getControlProps()}></div>
	<span {...api.getLabelProps()}>Subscribe ({api.checked ? 'checked' : 'unchecked'})</span>
	<input {...api.getHiddenInputProps()} />
</label>
