<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/qr-code
-->
<script lang="ts">
	import * as qrCode from '@zag-js/qr-code'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(qrCode.machine, { id, defaultValue: 'https://zagjs.com' })
	const api = $derived(qrCode.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<svg {...api.getFrameProps()}>
		<path {...api.getPatternProps()}></path>
	</svg>
</div>
