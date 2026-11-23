<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/clipboard
-->
<script lang="ts">
	import * as clipboard from '@zag-js/clipboard'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(clipboard.machine, { id, defaultValue: 'npm install @zag-js/svelte' })
	const api = $derived(clipboard.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Install command</label>
	<div {...api.getControlProps()}>
		<input {...api.getInputProps()} />
		<button {...api.getTriggerProps()}>{api.copied ? 'Copied' : 'Copy'}</button>
	</div>
</div>
