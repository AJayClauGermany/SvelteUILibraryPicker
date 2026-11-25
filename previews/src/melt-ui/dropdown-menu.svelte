<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/dropdown-menu
-->
<script lang="ts">
	import { createDropdownMenu } from '@melt-ui/svelte'

	const {
		elements: { trigger, menu, item, separator },
	} = createDropdownMenu()
</script>

<button {...$trigger} use:trigger>Options</button>

<div {...$menu} use:menu>
	<div {...$item} use:item>Rename</div>
	<div {...$item} use:item>Duplicate</div>
	<div {...$separator} use:separator></div>
	<div {...$item} use:item>Delete</div>
</div>
