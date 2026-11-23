<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-offcanvas--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Offcanvas } from '@sveltestrap/sveltestrap'

	let open = $state(false)
	const toggle = () => (open = !open)
</script>

<Button color="primary" onclick={toggle}>Open panel</Button>

<Offcanvas isOpen={open} {toggle} header="Filters" placement="start">
	Narrow the list by status, owner or date.
</Offcanvas>
