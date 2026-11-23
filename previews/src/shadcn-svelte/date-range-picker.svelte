<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/date-picker
-->
<script lang="ts">
	import './styles.css'
	import CalendarIcon from '@lucide/svelte/icons/calendar'
	import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
	import type { DateRange } from 'bits-ui'
	import * as Popover from './ui/popover/index.js'
	import { Button } from './ui/button/index.js'
	import { RangeCalendar } from './ui/range-calendar/index.js'

	const df = new DateFormatter('en-US', { dateStyle: 'medium' })
	const tz = getLocalTimeZone()
	const start = today(tz)
	let value = $state<DateRange>({ start, end: start.add({ days: 6 }) })
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" class="justify-start font-normal">
				<CalendarIcon data-icon="inline-start" />
				{#if value.start && value.end}
					{df.format(value.start.toDate(tz))} – {df.format(value.end.toDate(tz))}
				{:else if value.start}
					{df.format(value.start.toDate(tz))}
				{:else}
					Pick a date range
				{/if}
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0" align="start">
		<RangeCalendar bind:value />
	</Popover.Content>
</Popover.Root>
