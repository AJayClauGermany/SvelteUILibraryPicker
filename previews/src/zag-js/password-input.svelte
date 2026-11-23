<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/password-input
-->
<script lang="ts">
	import * as passwordInput from '@zag-js/password-input'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(passwordInput.machine, { id })
	const api = $derived(passwordInput.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Password</label>
	<div {...api.getControlProps()}>
		<input {...api.getInputProps()} />
		<button {...api.getVisibilityTriggerProps()}>
			<span {...api.getIndicatorProps()}>{api.visible ? 'Hide' : 'Show'}</span>
		</button>
	</div>
</div>
