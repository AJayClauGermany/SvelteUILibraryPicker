<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=rate&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Rate } from 'stdf'

	let value = $state(3)
</script>

<Rate bind:value />
