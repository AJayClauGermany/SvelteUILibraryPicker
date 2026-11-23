<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/VirtualList
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { VirtualList } from 'carbon-components-svelte'

	const items = Array.from({ length: 10000 }, (_, i) => ({ id: i, text: `Row ${i + 1}` }))
</script>

<!-- Rows are unstyled, so `measured` lets the list size them by their real height. -->
<VirtualList {items} measured itemHeight={20} containerHeight={320} let:item>
	<div>{item.text}</div>
</VirtualList>
