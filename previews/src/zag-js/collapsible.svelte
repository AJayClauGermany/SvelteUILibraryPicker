<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/collapsible
-->
<script lang="ts">
	import * as collapsible from '@zag-js/collapsible'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(collapsible.machine, { id })
	const api = $derived(collapsible.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<button {...api.getTriggerProps()}>{api.open ? 'Hide' : 'Show'} details</button>
	<div {...api.getContentProps()}>These details are hidden until the trigger is pressed.</div>
</div>
