<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/utilities/hotkeys
-->
<script lang="ts">
	import { useFormatHotkey, useHotkey } from '@ark-ui/svelte/hotkeys'

	const format = useFormatHotkey()
	let count = $state(0)

	useHotkey({ hotkey: 'Shift+N', action: () => count++ })
</script>

<p>Press <kbd>{format('Shift+N')}</kbd> to add a note.</p>
<p>Notes added: {count}</p>
