<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/utilities/focus-trap
-->
<script lang="ts">
	import { trapFocus } from '@zag-js/focus-trap'

	let region = $state<HTMLElement | null>(null)
	let active = $state(false)

	$effect(() => {
		if (!active || !region) return
		return trapFocus(region, {
			initialFocus: '#trap-name',
			onDeactivate: () => (active = false),
		})
	})
</script>

<button onclick={() => (active = true)} disabled={active}>Trap focus</button>

<div bind:this={region}>
	<p>{active ? 'Tab stays inside this box. Press Escape or Release to leave.' : 'Focus is free.'}</p>
	<input id="trap-name" placeholder="Name" />
	<input placeholder="Email" />
	<button onclick={() => (active = false)}>Release</button>
</div>
