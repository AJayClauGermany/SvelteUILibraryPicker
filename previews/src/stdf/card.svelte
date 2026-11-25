<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=card&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Card } from 'stdf'
</script>

<Card>
	{#snippet header()}Order summary{/snippet}
	Two items, ready to ship tomorrow.
	{#snippet footer()}Total: $42.00{/snippet}
</Card>
