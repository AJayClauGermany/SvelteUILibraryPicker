<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/range-calendar
-->
<script lang="ts">
	import { RangeCalendar, type DateRange } from 'bits-ui'
	import { getLocalTimeZone, today } from '@internationalized/date'

	const start = today(getLocalTimeZone())
	let value = $state<DateRange>({ start, end: start.add({ days: 4 }) })
</script>

<RangeCalendar.Root bind:value>
	{#snippet children({ months, weekdays })}
		<RangeCalendar.Header>
			<RangeCalendar.PrevButton>Prev</RangeCalendar.PrevButton>
			<RangeCalendar.Heading />
			<RangeCalendar.NextButton>Next</RangeCalendar.NextButton>
		</RangeCalendar.Header>
		{#each months as month (month.value.toString())}
			<RangeCalendar.Grid>
				<RangeCalendar.GridHead>
					<RangeCalendar.GridRow>
						{#each weekdays as day, i (i)}
							<RangeCalendar.HeadCell>{day}</RangeCalendar.HeadCell>
						{/each}
					</RangeCalendar.GridRow>
				</RangeCalendar.GridHead>
				<RangeCalendar.GridBody>
					{#each month.weeks as week, i (i)}
						<RangeCalendar.GridRow>
							{#each week as date (date.toString())}
								<RangeCalendar.Cell {date} month={month.value}>
									<RangeCalendar.Day />
								</RangeCalendar.Cell>
							{/each}
						</RangeCalendar.GridRow>
					{/each}
				</RangeCalendar.GridBody>
			</RangeCalendar.Grid>
		{/each}
	{/snippet}
</RangeCalendar.Root>
