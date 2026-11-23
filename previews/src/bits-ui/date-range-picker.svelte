<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/date-range-picker
-->
<script lang="ts">
	import { DateRangePicker } from 'bits-ui'
</script>

<DateRangePicker.Root>
	<DateRangePicker.Label>Stay</DateRangePicker.Label>
	<DateRangePicker.Input type="start">
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<DateRangePicker.Segment {part}>{value}</DateRangePicker.Segment>
			{/each}
		{/snippet}
	</DateRangePicker.Input>
	<span>to</span>
	<DateRangePicker.Input type="end">
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<DateRangePicker.Segment {part}>{value}</DateRangePicker.Segment>
			{/each}
		{/snippet}
	</DateRangePicker.Input>
	<DateRangePicker.Trigger>Pick</DateRangePicker.Trigger>
	<DateRangePicker.Content>
		<DateRangePicker.Calendar>
			{#snippet children({ months, weekdays })}
				<DateRangePicker.Header>
					<DateRangePicker.PrevButton>Prev</DateRangePicker.PrevButton>
					<DateRangePicker.Heading />
					<DateRangePicker.NextButton>Next</DateRangePicker.NextButton>
				</DateRangePicker.Header>
				{#each months as month (month.value.toString())}
					<DateRangePicker.Grid>
						<DateRangePicker.GridHead>
							<DateRangePicker.GridRow>
								{#each weekdays as day (day)}
									<DateRangePicker.HeadCell>{day.slice(0, 2)}</DateRangePicker.HeadCell>
								{/each}
							</DateRangePicker.GridRow>
						</DateRangePicker.GridHead>
						<DateRangePicker.GridBody>
							{#each month.weeks as week, i (i)}
								<DateRangePicker.GridRow>
									{#each week as date (date.toString())}
										<DateRangePicker.Cell {date} month={month.value}>
											<DateRangePicker.Day />
										</DateRangePicker.Cell>
									{/each}
								</DateRangePicker.GridRow>
							{/each}
						</DateRangePicker.GridBody>
					</DateRangePicker.Grid>
				{/each}
			{/snippet}
		</DateRangePicker.Calendar>
	</DateRangePicker.Content>
</DateRangePicker.Root>
