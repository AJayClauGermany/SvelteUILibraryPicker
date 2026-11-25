<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  `native` uses the device keyboard instead of pairing it with STDF's NumKeyboard.
  Docs: https://stdf.dev/components?nav=codeInput&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { CodeInput } from 'stdf'

	let value = $state('42')
</script>

<CodeInput bind:value native />
