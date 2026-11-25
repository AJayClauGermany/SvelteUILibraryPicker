<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Without styles the root has no fixed height and the scrollbar thumb has no size.
  Docs: https://melt-ui.com/docs/builders/scroll-area
-->
<script lang="ts">
	import { createScrollArea } from '@melt-ui/svelte'

	const lines = Array.from({ length: 10 }, (_, i) => `Line ${i + 1}`)

	const {
		elements: { root, viewport, content, scrollbarY, thumbY, corner },
	} = createScrollArea({ type: 'hover' })
</script>

<div {...$root} use:root>
	<div {...$viewport} use:viewport>
		<div {...$content} use:content>
			{#each lines as line (line)}
				<p>{line}</p>
			{/each}
		</div>
	</div>
	<div {...$scrollbarY} use:scrollbarY>
		<div {...$thumbY} use:thumbY></div>
	</div>
	<div {...$corner} use:corner></div>
</div>
