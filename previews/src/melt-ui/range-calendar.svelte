<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Selected days are marked by data attributes only; the text below shows the range.
  Docs: https://melt-ui.com/docs/builders/range-calendar
-->
<script lang="ts">
	import { createRangeCalendar } from '@melt-ui/svelte'

	const {
		elements: { calendar, heading, grid, cell, prevButton, nextButton },
		states: { months, headingValue, weekdays, value },
	} = createRangeCalendar()
</script>

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
<p>From {$value?.start ?? '…'} to {$value?.end ?? '…'}</p>
