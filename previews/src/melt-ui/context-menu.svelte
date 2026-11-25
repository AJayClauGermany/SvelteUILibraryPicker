<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Right-click the text to open the menu.
  Docs: https://melt-ui.com/docs/builders/context-menu
-->
<script lang="ts">
	import { createContextMenu } from '@melt-ui/svelte'

	const {
		elements: { trigger, menu, item, separator },
	} = createContextMenu()
</script>

<p {...$trigger} use:trigger>Right-click here</p>

<div {...$menu} use:menu>
	<div {...$item} use:item>Copy</div>
	<div {...$item} use:item>Paste</div>
	<div {...$separator} use:separator></div>
	<div {...$item} use:item>Inspect</div>
</div>
