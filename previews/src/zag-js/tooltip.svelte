<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/tooltip
-->
<script lang="ts">
	import * as tooltip from '@zag-js/tooltip'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(tooltip.machine, { id })
	const api = $derived(tooltip.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>Hover or focus me</button>
{#if api.open}
	<div {...api.getPositionerProps()}>
		<div {...api.getContentProps()}>Saves your changes</div>
	</div>
{/if}
