<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The switch is a button with role="switch"; the text inside is ours to write.
  Docs: https://melt-ui.com/docs/builders/switch
-->
<script lang="ts">
	import { createSwitch } from '@melt-ui/svelte'

	const {
		elements: { root, input },
		states: { checked },
	} = createSwitch()
</script>

<label for="airplane-mode">Airplane mode</label>
<button {...$root} use:root id="airplane-mode">{$checked ? 'On' : 'Off'}</button>
<input {...$input} use:input />
