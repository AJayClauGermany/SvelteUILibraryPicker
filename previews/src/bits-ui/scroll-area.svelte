<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Without styles the scrollbar thumb is invisible and the root has no fixed height.
  Docs: https://bits-ui.com/docs/components/scroll-area
-->
<script lang="ts">
	import { ScrollArea } from 'bits-ui'

	const lines = Array.from({ length: 10 }, (_, i) => `Line ${i + 1}`)
</script>

<ScrollArea.Root>
	<ScrollArea.Viewport>
		{#each lines as line (line)}
			<p>{line}</p>
		{/each}
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar orientation="vertical">
		<ScrollArea.Thumb />
	</ScrollArea.Scrollbar>
	<ScrollArea.Corner />
</ScrollArea.Root>
