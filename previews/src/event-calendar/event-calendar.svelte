<!--
  Event Calendar's built-in theme: the Calendar component imports the package's own CSS, so nothing
  else is loaded. Month view from the DayGrid plugin, with a few sample events of ours placed in the
  current month so they are always visible. No styles of ours.
  Docs: https://github.com/vkurko/calendar#svelte-5-component
-->
<script lang="ts">
	import { Calendar, DayGrid } from '@event-calendar/core'

	const today = new Date()
	const day = (d: number, h = 0) => new Date(today.getFullYear(), today.getMonth(), d, h)

	let options = $state({
		view: 'dayGridMonth',
		events: [
			{ id: '1', title: 'Team sync', start: day(3, 10), end: day(3, 11) },
			{ id: '2', title: 'Design review', start: day(12, 14), end: day(12, 15) },
			{ id: '3', title: 'Conference', start: day(18), end: day(21), allDay: true },
			{ id: '4', title: 'Release', start: day(26), end: day(27), allDay: true },
		],
	})
</script>

<Calendar plugins={[DayGrid]} {options} />
