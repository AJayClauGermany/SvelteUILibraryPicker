<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/toggle
-->
<script lang="ts">
	import { createToggle } from '@melt-ui/svelte'

	const {
		elements: { root },
		states: { pressed },
	} = createToggle()
</script>

<button {...$root} use:root aria-label="Bold">Bold: {$pressed ? 'on' : 'off'}</button>
