<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Without styles the open dialog appears in the page flow, below the trigger.
  Docs: https://melt-ui.com/docs/builders/dialog
-->
<script lang="ts">
	import { createDialog } from '@melt-ui/svelte'

	const {
		elements: { trigger, overlay, content, title, description, close },
	} = createDialog()
</script>

<button {...$trigger} use:trigger>Open dialog</button>

<div {...$overlay} use:overlay></div>
<div {...$content} use:content>
	<h2 {...$title} use:title>Example dialog</h2>
	<p {...$description} use:description>A short message inside the dialog.</p>
	<button {...$close} use:close>Close</button>
</div>
