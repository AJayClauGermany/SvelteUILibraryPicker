<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The dialog starts open; the button opens it again.
  Docs: https://stdf.dev/components?nav=dialog&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Dialog } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Delete draft</Button>
<Dialog
	bind:visible
	title="Delete this draft?"
	content="The draft will be removed from all your devices."
	primaryText="Delete"
	secondaryText="Cancel"
	onprimary={() => (visible = false)}
/>
