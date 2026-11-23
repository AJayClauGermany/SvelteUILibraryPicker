<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Only the day view is included here; the calendar opens from the trigger button.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/date-picker
-->
<script lang="ts">
	import './styles.css'
	import { DatePicker, Portal } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<DatePicker>
	<DatePicker.Label>Start date</DatePicker.Label>
	<DatePicker.Control>
		<DatePicker.Input placeholder="mm/dd/yyyy" />
		<DatePicker.Trigger />
	</DatePicker.Control>
	<Portal>
		<DatePicker.Positioner>
			<DatePicker.Content>
				<DatePicker.View view="day">
					<DatePicker.Context>
						{#snippet children(picker)}
							<DatePicker.ViewControl>
								<DatePicker.PrevTrigger />
								<DatePicker.RangeText />
								<DatePicker.NextTrigger />
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
</DatePicker>
