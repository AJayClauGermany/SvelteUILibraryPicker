<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The checkbox is a button with role="checkbox"; the tick inside it is plain text.
  Docs: https://melt-ui.com/docs/builders/checkbox
-->
<script lang="ts">
	import { createCheckbox, createLabel } from '@melt-ui/svelte'

	const {
		elements: { root, input },
		states: { checked },
	} = createCheckbox({ defaultChecked: true })

	const {
		elements: { root: label },
	} = createLabel()
</script>

<button {...$root} use:root id="terms">{$checked === true ? '☑' : '☐'}</button>
<input {...$input} use:input />
<label {...$label} use:label for="terms">Accept the terms</label>
