<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=radio&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Radio } from 'stdf'

	let value = $state('standard')
</script>

<Radio
	bind:value
	data={[
		{ name: 'standard', label: 'Standard shipping' },
		{ name: 'express', label: 'Express shipping' },
		{ name: 'pickup', label: 'Pick up in store' },
	]}
/>
