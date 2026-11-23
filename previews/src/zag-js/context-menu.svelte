<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/context-menu
-->
<script lang="ts">
	import * as menu from '@zag-js/menu'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(menu.machine, { id })
	const api = $derived(menu.connect(service, normalizeProps))
</script>

<div {...api.getContextTriggerProps()}>Right-click this area</div>
<div {...api.getPositionerProps()}>
	<ul {...api.getContentProps()}>
		<li {...api.getItemProps({ value: 'copy' })}>Copy</li>
		<li {...api.getItemProps({ value: 'rename' })}>Rename</li>
		<li {...api.getItemProps({ value: 'remove' })}>Remove</li>
	</ul>
</div>
