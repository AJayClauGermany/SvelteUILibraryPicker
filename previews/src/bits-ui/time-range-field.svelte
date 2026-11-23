<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/time-range-field
-->
<script lang="ts">
	import { TimeRangeField, type TimeRange } from 'bits-ui'
	import { Time } from '@internationalized/date'

	let value = $state<TimeRange>({ start: new Time(9, 0), end: new Time(17, 0) })
</script>

<TimeRangeField.Root bind:value>
	<TimeRangeField.Label>Opening hours</TimeRangeField.Label>
	<TimeRangeField.Input type="start">
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
			{/each}
		{/snippet}
	</TimeRangeField.Input>
	<span>to</span>
	<TimeRangeField.Input type="end">
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
			{/each}
		{/snippet}
	</TimeRangeField.Input>
</TimeRangeField.Root>
