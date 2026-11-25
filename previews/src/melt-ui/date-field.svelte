<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Each part of the date is its own focusable segment; type digits or use the arrow keys.
  Docs: https://melt-ui.com/docs/builders/date-field
-->
<script lang="ts">
	import { createDateField } from '@melt-ui/svelte'

	const {
		elements: { field, segment, label, hiddenInput },
		states: { segmentContents },
	} = createDateField()
</script>

<span {...$label} use:label>Birthday</span>
<div {...$field} use:field>
	{#each $segmentContents as seg, i (i)}
		<span {...$segment(seg.part)} use:segment>{seg.value}</span>
	{/each}
</div>
<input {...$hiddenInput} use:hiddenInput />
