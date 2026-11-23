<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/drawer
-->
<script lang="ts">
	import * as drawer from '@zag-js/drawer'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(drawer.machine, { id })
	const api = $derived(drawer.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>Open drawer</button>
<div {...api.getBackdropProps()}></div>
<div {...api.getPositionerProps()}>
	<div {...api.getContentProps()}>
		<div {...api.getGrabberProps()}>
			<div {...api.getGrabberIndicatorProps()}></div>
		</div>
		<h2 {...api.getTitleProps()}>Filters</h2>
		<p {...api.getDescriptionProps()}>Narrow down the results.</p>
		<button {...api.getCloseTriggerProps()}>Done</button>
	</div>
</div>
