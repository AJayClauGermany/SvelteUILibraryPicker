<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=stepper&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Stepper } from 'stdf'

	let value = $state(2)
</script>

<Stepper bind:value min={1} max={10} />
