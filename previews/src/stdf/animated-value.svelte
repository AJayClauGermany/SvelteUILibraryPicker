<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=charRoll&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, CharRoll } from 'stdf'

	let value = $state(2048)
</script>

<CharRoll {value} separator />
<Button onclick={() => (value = Math.floor(Math.random() * 100000))}>Roll</Button>
