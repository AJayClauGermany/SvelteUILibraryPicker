<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/toolbar
-->
<script lang="ts">
	import { createToolbar } from '@melt-ui/svelte'

	const {
		elements: { root, button, separator },
		builders: { createToolbarGroup },
	} = createToolbar()

	const {
		elements: { group, item },
	} = createToolbarGroup({ type: 'multiple' })
</script>

<div {...$root} use:root aria-label="Formatting">
	<div {...$group} use:group>
		<button {...$item('bold')} use:item>Bold</button>
		<button {...$item('italic')} use:item>Italic</button>
	</div>
	<div {...$separator} use:separator></div>
	<button {...$button} use:button>Undo</button>
	<button {...$button} use:button>Redo</button>
</div>
