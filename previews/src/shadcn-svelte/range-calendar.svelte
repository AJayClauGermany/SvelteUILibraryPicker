<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/range-calendar
-->
<script lang="ts">
	import './styles.css'
	import { getLocalTimeZone, today } from '@internationalized/date'
	import { RangeCalendar } from './ui/range-calendar/index.js'

	const start = today(getLocalTimeZone())
	let value = $state({ start, end: start.add({ days: 4 }) })
</script>

<RangeCalendar bind:value class="rounded-md border" />
