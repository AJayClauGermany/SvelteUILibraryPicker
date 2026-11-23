<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-toast--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Toast, ToastBody, ToastHeader } from '@sveltestrap/sveltestrap'

	let open = $state(true)
	const toggle = () => (open = !open)
</script>

<Button color="primary" onclick={() => (open = true)}>Show toast</Button>

<Toast isOpen={open}>
	<ToastHeader {toggle}>Upload complete</ToastHeader>
	<ToastBody>Your file was uploaded.</ToastBody>
</Toast>
