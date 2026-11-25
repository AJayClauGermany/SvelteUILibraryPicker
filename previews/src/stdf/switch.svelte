<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=switch&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from 'stdf'

	let active = $state(true)
</script>

<Switch bind:active />
<Switch />
