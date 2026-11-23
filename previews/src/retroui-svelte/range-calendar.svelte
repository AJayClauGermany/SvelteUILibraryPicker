<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/range-calendar
-->
<script lang="ts">
	import './styles.css'
	import { getLocalTimeZone, today } from '@internationalized/date'
	import { RangeCalendar } from './ui/range-calendar/index.js'

	const start = today(getLocalTimeZone())
	let value = $state({ start, end: start.add({ days: 4 }) })
</script>

<RangeCalendar bind:value />
