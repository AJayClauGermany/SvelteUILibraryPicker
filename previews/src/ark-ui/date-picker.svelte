<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/date-picker
-->
<script lang="ts">
	import { DatePicker } from '@ark-ui/svelte/date-picker'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<DatePicker.Root>
	<DatePicker.Label>Due date</DatePicker.Label>
	<DatePicker.Control>
		<DatePicker.Input />
		<DatePicker.Trigger>Open calendar</DatePicker.Trigger>
	</DatePicker.Control>
	<Portal>
		<DatePicker.Positioner>
			<DatePicker.Content>
				<DatePicker.View view="day">
					<DatePicker.Context>
						{#snippet render(picker)}
							<DatePicker.ViewControl>
								<DatePicker.PrevTrigger>‹</DatePicker.PrevTrigger>
								<DatePicker.RangeText />
								<DatePicker.NextTrigger>›</DatePicker.NextTrigger>
							</DatePicker.ViewControl>
							<DatePicker.Table>
								<DatePicker.TableHead>
									<DatePicker.TableRow>
										{#each picker().weekDays as weekDay (weekDay.long)}
											<DatePicker.TableHeader>{weekDay.narrow}</DatePicker.TableHeader>
										{/each}
									</DatePicker.TableRow>
								</DatePicker.TableHead>
								<DatePicker.TableBody>
									{#each picker().weeks as week, i (i)}
										<DatePicker.TableRow>
											{#each week as day (day.toString())}
												<DatePicker.TableCell value={day}>
													<DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
												</DatePicker.TableCell>
											{/each}
										</DatePicker.TableRow>
									{/each}
								</DatePicker.TableBody>
							</DatePicker.Table>
						{/snippet}
					</DatePicker.Context>
				</DatePicker.View>
			</DatePicker.Content>
		</DatePicker.Positioner>
	</Portal>
</DatePicker.Root>
