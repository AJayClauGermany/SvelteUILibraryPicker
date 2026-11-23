<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/date-picker
-->
<script lang="ts">
	import { DatePicker } from 'bits-ui'
</script>

<DatePicker.Root>
	<DatePicker.Label>Due date</DatePicker.Label>
	<DatePicker.Input>
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<DatePicker.Segment {part}>{value}</DatePicker.Segment>
			{/each}
			<DatePicker.Trigger>Pick</DatePicker.Trigger>
		{/snippet}
	</DatePicker.Input>
	<DatePicker.Portal>
		<DatePicker.Content>
			<DatePicker.Calendar>
				{#snippet children({ months, weekdays })}
					<DatePicker.Header>
						<DatePicker.PrevButton>Prev</DatePicker.PrevButton>
						<DatePicker.Heading />
						<DatePicker.NextButton>Next</DatePicker.NextButton>
					</DatePicker.Header>
					{#each months as month (month.value.toString())}
						<DatePicker.Grid>
							<DatePicker.GridHead>
								<DatePicker.GridRow>
									{#each weekdays as day, i (i)}
										<DatePicker.HeadCell>{day}</DatePicker.HeadCell>
									{/each}
								</DatePicker.GridRow>
							</DatePicker.GridHead>
							<DatePicker.GridBody>
								{#each month.weeks as week, i (i)}
									<DatePicker.GridRow>
										{#each week as date (date.toString())}
											<DatePicker.Cell {date} month={month.value}>
												<DatePicker.Day />
											</DatePicker.Cell>
										{/each}
									</DatePicker.GridRow>
								{/each}
							</DatePicker.GridBody>
						</DatePicker.Grid>
					{/each}
				{/snippet}
			</DatePicker.Calendar>
		</DatePicker.Content>
	</DatePicker.Portal>
</DatePicker.Root>
