<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Each part of both dates is its own focusable segment; type digits or use the arrow keys.
  Docs: https://melt-ui.com/docs/builders/date-range-field
-->
<script lang="ts">
	import { createDateRangeField } from '@melt-ui/svelte'

	const {
		elements: { field, startSegment, endSegment, label },
		states: { segmentContents },
	} = createDateRangeField()

	// The field's action ignores its element, and its published type takes no arguments,
	// so `use:field` fails type checking. A one-line wrapper keeps the same behaviour.
	const fieldAction = (_node: HTMLElement) => field()
</script>

<span {...$label} use:label>Trip dates</span>
<div {...$field} use:fieldAction>
	{#each $segmentContents.start as seg, i (i)}
		<span {...$startSegment(seg.part)} use:startSegment>{seg.value}</span>
	{/each}
	<span>to</span>
	{#each $segmentContents.end as seg, i (i)}
		<span {...$endSegment(seg.part)} use:endSegment>{seg.value}</span>
	{/each}
</div>
