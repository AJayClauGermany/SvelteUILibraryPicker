<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/editable
-->
<script lang="ts">
	import * as editable from '@zag-js/editable'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(editable.machine, { id, defaultValue: 'Click to rename' })
	const api = $derived(editable.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Title</label>
	<div {...api.getAreaProps()}>
		<input {...api.getInputProps()} />
		<span {...api.getPreviewProps()}>{api.valueText}</span>
	</div>
	<div {...api.getControlProps()}>
		{#if api.editing}
			<button {...api.getSubmitTriggerProps()}>Save</button>
			<button {...api.getCancelTriggerProps()}>Cancel</button>
		{:else}
			<button {...api.getEditTriggerProps()}>Edit</button>
		{/if}
	</div>
</div>
