<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/date-range-field
-->
<script lang="ts">
	import { DateRangeField, type DateRange } from 'bits-ui'
	import { getLocalTimeZone, today } from '@internationalized/date'

	const start = today(getLocalTimeZone())
	let value = $state<DateRange>({ start, end: start.add({ days: 7 }) })
</script>

<DateRangeField.Root bind:value>
	<DateRangeField.Label>Trip dates</DateRangeField.Label>
	<DateRangeField.Input type="start">
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
			{/each}
		{/snippet}
	</DateRangeField.Input>
	<span>to</span>
	<DateRangeField.Input type="end">
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
			{/each}
		{/snippet}
	</DateRangeField.Input>
</DateRangeField.Root>
