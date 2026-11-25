<!--
  Zag.js is headless: its utilities ship behaviour, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/utilities/hotkeys
-->
<script lang="ts">
	import { createHotkeyStore, formatHotkey } from '@zag-js/hotkeys'

	let count = $state(0)

	$effect(() => {
		const store = createHotkeyStore()
		store.register({ id: 'add-note', hotkey: 'Shift+N', action: () => count++ })
		store.init({ target: document })
		return () => store.destroy()
	})
</script>

<p>Press <kbd>{formatHotkey('Shift+N')}</kbd> to add a note.</p>
<p>Notes added: {count}</p>
