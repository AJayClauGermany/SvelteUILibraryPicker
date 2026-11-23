<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/date-picker
-->
<script lang="ts">
	import './styles.css'
	import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date'
	import CalendarIcon from '@lucide/svelte/icons/calendar'
	import { buttonVariants } from './ui/button/index.ts'
	import { Calendar } from './ui/calendar/index.ts'
	import { Popover, PopoverPopup, PopoverTrigger } from './ui/popover/index.ts'
	import { cn } from './utils.ts'

	const df = new DateFormatter('en-US', { dateStyle: 'long' })

	let value = $state<DateValue | undefined>()
</script>

<Popover>
	<PopoverTrigger class={cn(buttonVariants({ variant: 'outline' }), 'w-64 justify-start')}>
		<CalendarIcon aria-hidden="true" />
		{value ? df.format(value.toDate(getLocalTimeZone())) : 'Choose a date'}
	</PopoverTrigger>
	<PopoverPopup>
		<Calendar bind:value mode="single" />
	</PopoverPopup>
</Popover>
