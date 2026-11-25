<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  A wheel picker in a bottom popup, here with hour and minute columns; it starts open and the
  button opens it again.
  Docs: https://stdf.dev/components?nav=timePicker&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, TimePicker } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Pick a time</Button>
<TimePicker bind:visible type="hhmm" />
