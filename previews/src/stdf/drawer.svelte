<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The popup starts open; the button opens it again.
  Docs: https://stdf.dev/components?nav=popup&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Popup } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Open popup</Button>
<Popup bind:visible>
	Popups slide in from the bottom by default. Tap the mask to close.
</Popup>
