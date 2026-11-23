<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/date-picker
-->
<script lang="ts">
	import * as datePicker from '@zag-js/date-picker'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(datePicker.machine, { id })
	const api = $derived(datePicker.connect(service, normalizeProps))
</script>

<div {...api.getControlProps()}>
	<input {...api.getInputProps()} />
	<button {...api.getTriggerProps()}>Pick</button>
</div>
<div {...api.getPositionerProps()}>
	<div {...api.getContentProps()}>
		<div>
			<button {...api.getPrevTriggerProps()}>Prev</button>
			<span>{api.visibleRangeText.start}</span>
			<button {...api.getNextTriggerProps()}>Next</button>
		</div>
		<table {...api.getTableProps({ view: 'day' })}>
			<thead {...api.getTableHeaderProps({ view: 'day' })}>
				<tr {...api.getTableRowProps({ view: 'day' })}>
					{#each api.weekDays as day, i (i)}
						<th scope="col" aria-label={day.long}>{day.narrow}</th>
					{/each}
				</tr>
			</thead>
			<tbody {...api.getTableBodyProps({ view: 'day' })}>
				{#each api.weeks as week, i (i)}
					<tr {...api.getTableRowProps({ view: 'day' })}>
						{#each week as value, j (j)}
							<td {...api.getDayTableCellProps({ value })}>
								<div {...api.getDayTableCellTriggerProps({ value })}>{value.day}</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
