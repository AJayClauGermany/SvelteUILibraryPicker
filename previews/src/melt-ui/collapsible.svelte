<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/collapsible
-->
<script lang="ts">
	import { createCollapsible } from '@melt-ui/svelte'

	const {
		elements: { root, trigger, content },
		states: { open },
	} = createCollapsible()
</script>

<div {...$root} use:root>
	<button {...$trigger} use:trigger>{$open ? 'Hide details' : 'Show details'}</button>
	<div {...$content} use:content>Details that can be shown or hidden.</div>
</div>
