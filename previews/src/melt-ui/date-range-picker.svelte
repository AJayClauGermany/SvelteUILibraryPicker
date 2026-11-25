<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  A date range field plus a range calendar in a popover; the button opens the calendar.
  Docs: https://melt-ui.com/docs/builders/date-range-picker
-->
<script lang="ts">
	import { createDateRangePicker } from '@melt-ui/svelte'

	const {
		elements: {
			field,
			startSegment,
			endSegment,
			label,
			trigger,
			content,
			calendar,
			heading,
			grid,
			cell,
			prevButton,
			nextButton,
		},
		states: { segmentContents, months, headingValue, weekdays },
	} = createDateRangePicker()

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
	<button {...$trigger} use:trigger>Open calendar</button>
</div>

<div {...$content} use:content>
	<div {...$calendar} use:calendar>
		<header>
			<button {...$prevButton} use:prevButton aria-label="Previous month">‹</button>
			<span {...$heading} use:heading>{$headingValue}</span>
			<button {...$nextButton} use:nextButton aria-label="Next month">›</button>
		</header>
		{#each $months as month (month.value.toString())}
			<table {...$grid} use:grid>
				<thead>
					<tr>
						{#each $weekdays as day, d (d)}
							<th>{day}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each month.weeks as week, w (w)}
						<tr>
							{#each week as date (date.toString())}
								<td><span {...$cell(date, month.value)} use:cell>{date.day}</span></td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/each}
	</div>
</div>
