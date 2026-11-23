<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/calendar
-->
<script lang="ts">
	import './styles.css'
	import { CalendarDate } from '@internationalized/date'
	import { Calendar } from './ui/calendar/index.ts'

	let value = $state(new CalendarDate(2025, 6, 12))
</script>

<Calendar mode="single" bind:value />
