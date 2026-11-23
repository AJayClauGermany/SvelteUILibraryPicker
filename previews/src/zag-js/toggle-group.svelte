<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/toggle-group
-->
<script lang="ts">
	import * as toggleGroup from '@zag-js/toggle-group'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(toggleGroup.machine, { id, defaultValue: ['left'] })
	const api = $derived(toggleGroup.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()} aria-label="Text alignment">
	<button {...api.getItemProps({ value: 'left' })}>Left</button>
	<button {...api.getItemProps({ value: 'center' })}>Center</button>
	<button {...api.getItemProps({ value: 'right' })}>Right</button>
</div>
