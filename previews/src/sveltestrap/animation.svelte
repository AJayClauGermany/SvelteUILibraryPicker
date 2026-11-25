<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-fade--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Alert, Button, Fade } from '@sveltestrap/sveltestrap'

	let open = $state(true)
</script>

<Button color="primary" onclick={() => (open = !open)}>
	{open ? 'Fade out' : 'Fade in'}
</Button>
<Fade isOpen={open}>
	<Alert color="info">This message fades in and out.</Alert>
</Fade>
