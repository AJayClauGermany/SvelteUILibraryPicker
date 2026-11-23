<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-navbar--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Card, CardBody, Collapse } from '@sveltestrap/sveltestrap'

	let open = $state(false)
</script>

<Button color="primary" onclick={() => (open = !open)}>
	{open ? 'Hide details' : 'Show details'}
</Button>
<Collapse isOpen={open}>
	<Card>
		<CardBody>These details stay hidden until you open them.</CardBody>
	</Card>
</Collapse>
