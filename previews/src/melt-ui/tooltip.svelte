<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/tooltip
-->
<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte'

	const {
		elements: { trigger, content },
	} = createTooltip({ openDelay: 300 })
</script>

<button {...$trigger} use:trigger>Hover me</button>

<div {...$content} use:content>A short hint.</div>
