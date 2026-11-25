<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  A date field plus a calendar in a popover; the button opens the calendar.
  Docs: https://melt-ui.com/docs/builders/date-picker
-->
<script lang="ts">
	import { createDatePicker } from '@melt-ui/svelte'

	const {
		elements: { field, segment, label, trigger, content, calendar, heading, grid, cell, prevButton, nextButton },
		states: { segmentContents, months, headingValue, weekdays },
	} = createDatePicker()
</script>

<span {...$label} use:label>Due date</span>
<div {...$field} use:field>
	{#each $segmentContents as seg, i (i)}
		<span {...$segment(seg.part)} use:segment>{seg.value}</span>
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
