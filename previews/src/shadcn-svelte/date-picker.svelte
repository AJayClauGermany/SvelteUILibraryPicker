<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/date-picker
-->
<script lang="ts">
	import './styles.css'
	import CalendarIcon from '@lucide/svelte/icons/calendar'
	import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date'
	import * as Popover from './ui/popover/index.js'
	import { Button } from './ui/button/index.js'
	import { Calendar } from './ui/calendar/index.js'

	const df = new DateFormatter('en-US', { dateStyle: 'long' })
	let value = $state<DateValue | undefined>()
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="outline"
				data-empty={!value}
				class="w-[240px] justify-start font-normal data-[empty=true]:text-muted-foreground"
			>
				<CalendarIcon data-icon="inline-start" />
				{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0" align="start">
		<Calendar type="single" bind:value />
	</Popover.Content>
</Popover.Root>
