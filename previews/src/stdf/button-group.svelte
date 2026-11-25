<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=buttonGroup&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { ButtonGroup } from 'stdf'
</script>

<ButtonGroup items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }]} />
