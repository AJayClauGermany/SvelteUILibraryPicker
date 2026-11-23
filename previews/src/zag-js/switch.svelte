<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/switch
-->
<script lang="ts">
	import * as zagSwitch from '@zag-js/switch'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(zagSwitch.machine, { id })
	const api = $derived(zagSwitch.connect(service, normalizeProps))
</script>

<label {...api.getRootProps()}>
	<input {...api.getHiddenInputProps()} />
	<span {...api.getControlProps()}>
		<span {...api.getThumbProps()}></span>
	</span>
	<span {...api.getLabelProps()}>Airplane mode</span>
</label>
