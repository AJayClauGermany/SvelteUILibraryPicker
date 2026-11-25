<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Calendar's range mode, rendered inline with popup={null}.
  Docs: https://stdf.dev/components?nav=calendar&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Calendar } from 'stdf'
</script>

<Calendar popup={null} mode="range" />
