<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  An alert dialog is the Dialog builder with role: 'alertdialog'.
  Docs: https://melt-ui.com/docs/builders/dialog
-->
<script lang="ts">
	import { createDialog } from '@melt-ui/svelte'

	const {
		elements: { trigger, overlay, content, title, description, close },
	} = createDialog({ role: 'alertdialog', closeOnOutsideClick: false })
</script>

<button {...$trigger} use:trigger>Delete file</button>

<div {...$overlay} use:overlay></div>
<div {...$content} use:content>
	<h2 {...$title} use:title>Delete this file?</h2>
	<p {...$description} use:description>This cannot be undone.</p>
	<button {...$close} use:close>Cancel</button>
	<button {...$close} use:close>Delete</button>
</div>
