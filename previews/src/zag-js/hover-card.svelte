<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/hover-card
-->
<script lang="ts">
	import * as hoverCard from '@zag-js/hover-card'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(hoverCard.machine, { id })
	const api = $derived(hoverCard.connect(service, normalizeProps))
</script>

<a href="https://zagjs.com" target="_blank" {...api.getTriggerProps()}>Hover over this link</a>
{#if api.open}
	<div use:portal {...api.getPositionerProps()}>
		<div {...api.getContentProps()}>
			<div {...api.getArrowProps()}>
				<div {...api.getArrowTipProps()}></div>
			</div>
			Zag.js: framework-agnostic UI component machines.
		</div>
	</div>
{/if}
