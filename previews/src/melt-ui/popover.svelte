<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/popover
-->
<script lang="ts">
	import { createPopover } from '@melt-ui/svelte'

	const {
		elements: { trigger, content, close },
	} = createPopover()
</script>

<button {...$trigger} use:trigger>Open popover</button>

<div {...$content} use:content>
	<p>Some extra information in a popover.</p>
	<button {...$close} use:close>Close</button>
</div>
