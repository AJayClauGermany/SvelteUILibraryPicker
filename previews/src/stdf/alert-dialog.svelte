<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Modal starts open; the button opens it again.
  Docs: https://stdf.dev/components?nav=modal&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Modal } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Show notice</Button>
<Modal bind:visible title="Update installed" content="Restart the app to finish." btnText="Got it" />
