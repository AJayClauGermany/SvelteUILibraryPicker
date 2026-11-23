<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/calendar
-->
<script lang="ts">
	import './styles.css'
	import { getLocalTimeZone, today } from '@internationalized/date'
	import { Calendar } from './ui/calendar/index.js'

	let value = $state(today(getLocalTimeZone()))
</script>

<div class="flex">
	<Calendar type="single" bind:value />
</div>
