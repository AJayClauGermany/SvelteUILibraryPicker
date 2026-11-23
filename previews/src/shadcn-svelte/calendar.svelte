<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/calendar
-->
<script lang="ts">
	import './styles.css'
	import { getLocalTimeZone, today } from '@internationalized/date'
	import { Calendar } from './ui/calendar/index.js'

	let value = $state(today(getLocalTimeZone()))
</script>

<Calendar type="single" bind:value class="rounded-lg border" />
