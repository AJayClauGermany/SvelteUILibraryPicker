<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/menu
-->
<script lang="ts">
	import * as menu from '@zag-js/menu'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(menu.machine, { id })
	const api = $derived(menu.connect(service, normalizeProps))
</script>

<button {...api.getTriggerProps()}>
	Options <span {...api.getIndicatorProps()}>▾</span>
</button>
<div use:portal {...api.getPositionerProps()}>
	<ul {...api.getContentProps()}>
		<li {...api.getItemProps({ value: 'open' })}>Open</li>
		<li {...api.getItemProps({ value: 'share' })}>Share</li>
		<li {...api.getItemProps({ value: 'archive' })}>Archive</li>
	</ul>
</div>
