<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/splitter
-->
<script lang="ts">
	import * as splitter from '@zag-js/splitter'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(splitter.machine, {
		id,
		defaultSize: [50, 50],
		panels: [{ id: 'left' }, { id: 'right' }],
	})
	const api = $derived(splitter.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getPanelProps({ id: 'left' })}>Left panel</div>
	<div {...api.getResizeTriggerProps({ id: 'left:right' })}></div>
	<div {...api.getPanelProps({ id: 'right' })}>Right panel</div>
</div>
