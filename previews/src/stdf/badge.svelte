<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The badge sits on the top corner of whatever it wraps.
  Docs: https://stdf.dev/components?nav=badge&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Badge, Button } from 'stdf'
</script>

<Badge text="8">
	<Button>Messages</Button>
</Badge>
