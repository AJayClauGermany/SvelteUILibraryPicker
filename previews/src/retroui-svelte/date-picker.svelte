<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/date-picker
-->
<script lang="ts">
	import './styles.css'
	import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date'
	import { buttonVariants } from './ui/button/index.js'
	import { Calendar } from './ui/calendar/index.js'
	import * as Popover from './ui/popover/index.js'

	const df = new DateFormatter('en-US', { dateStyle: 'long' })
	let value = $state<DateValue>()
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>
		{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar type="single" bind:value />
	</Popover.Content>
</Popover.Root>
