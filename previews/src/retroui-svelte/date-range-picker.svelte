<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/date-picker
-->
<script lang="ts">
	import './styles.css'
	import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
	import type { DateRange } from 'bits-ui'
	import { buttonVariants } from './ui/button/index.js'
	import { RangeCalendar } from './ui/range-calendar/index.js'
	import * as Popover from './ui/popover/index.js'

	const df = new DateFormatter('en-US', { dateStyle: 'medium' })
	const start = today(getLocalTimeZone())
	let value: DateRange = $state({ start, end: start.add({ days: 6 }) })

	const format = (range: DateRange) =>
		range.start && range.end
			? `${df.format(range.start.toDate(getLocalTimeZone()))} - ${df.format(range.end.toDate(getLocalTimeZone()))}`
			: 'Pick a date range'
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>{format(value)}</Popover.Trigger>
	<Popover.Content class="w-auto p-0" align="start">
		<RangeCalendar bind:value />
	</Popover.Content>
</Popover.Root>
