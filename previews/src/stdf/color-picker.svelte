<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The picker opens in a bottom popup; it starts open and the button opens it again.
  Docs: https://stdf.dev/components?nav=colorPicker&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, ColorPicker } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Pick a colour</Button>
<ColorPicker bind:visible value="#3a7bd5" />
