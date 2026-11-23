<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/calendar
-->
<script lang="ts">
	import { Calendar } from 'bits-ui'
	import { getLocalTimeZone, today, type DateValue } from '@internationalized/date'

	let value = $state<DateValue | undefined>(today(getLocalTimeZone()))
</script>

<Calendar.Root type="single" bind:value>
	{#snippet children({ months, weekdays })}
		<Calendar.Header>
			<Calendar.PrevButton>Prev</Calendar.PrevButton>
			<Calendar.Heading />
			<Calendar.NextButton>Next</Calendar.NextButton>
		</Calendar.Header>
		{#each months as month (month.value.toString())}
			<Calendar.Grid>
				<Calendar.GridHead>
					<Calendar.GridRow>
						{#each weekdays as day, i (i)}
							<Calendar.HeadCell>{day}</Calendar.HeadCell>
						{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as week, i (i)}
						<Calendar.GridRow>
							{#each week as date (date.toString())}
								<Calendar.Cell {date} month={month.value}>
									<Calendar.Day />
								</Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	{/snippet}
</Calendar.Root>
