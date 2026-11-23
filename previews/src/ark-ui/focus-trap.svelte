<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/utilities/focus-trap
-->
<script lang="ts">
	import { FocusTrap } from '@ark-ui/svelte/focus-trap'

	let trapped = $state(false)
</script>

<button type="button" onclick={() => (trapped = true)} disabled={trapped}>Trap focus</button>

<FocusTrap disabled={!trapped} returnFocusOnDeactivate={false}>
	<p>{trapped ? 'Tab stays inside this box.' : 'Focus moves freely.'}</p>
	<input type="text" placeholder="Name" />
	<input type="email" placeholder="Email" />
	<button type="button" onclick={() => (trapped = false)}>Release</button>
</FocusTrap>
