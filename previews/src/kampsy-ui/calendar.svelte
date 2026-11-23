<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/calendar
-->
<script lang="ts">
	import './styles.css'
	import { Calendar } from 'kampsy-ui'
	import type { DateValue, RangeValue } from 'kampsy-ui'

	let value = $state<DateValue | RangeValue<DateValue>>()
</script>

<Calendar bind:value />
