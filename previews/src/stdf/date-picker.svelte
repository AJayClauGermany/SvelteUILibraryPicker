<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Calendar opens in a bottom popup by default; it starts open and the button opens it again.
  Docs: https://stdf.dev/components?nav=calendar&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Calendar } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Pick a date</Button>
<Calendar bind:visible />
