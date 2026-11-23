<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/toggle
-->
<script lang="ts">
	import * as toggle from '@zag-js/toggle'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const service = useMachine(toggle.machine, {})
	const api = $derived(toggle.connect(service, normalizeProps))
</script>

<button {...api.getRootProps()}>
	<span {...api.getIndicatorProps()}>{api.pressed ? 'On' : 'Off'}</span>
	Italic
</button>
