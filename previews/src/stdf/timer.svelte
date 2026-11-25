<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=countDown&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { CountDown } from 'stdf'
</script>

<CountDown time={90 * 60 * 1000} />
