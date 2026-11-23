<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/popover
-->
<script lang="ts">
	import * as popover from '@zag-js/popover'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(popover.machine, { id })
	const api = $derived(popover.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>Open popover</button>
<div use:portal={{ disabled: !api.portalled }} {...api.getPositionerProps()}>
	<div {...api.getContentProps()}>
		<div {...api.getTitleProps()}>Notifications</div>
		<div {...api.getDescriptionProps()}>You have no new messages.</div>
		<button {...api.getCloseTriggerProps()}>Close</button>
	</div>
</div>
