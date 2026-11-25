<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The tooltip starts shown; hover or tap the button to toggle it.
  Docs: https://stdf.dev/components?nav=tooltip&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Tooltip } from 'stdf'

	let visible = $state(true)
</script>

<Tooltip bind:visible content="Saved to your library" position="bottom">
	<Button>Bookmark</Button>
</Tooltip>
