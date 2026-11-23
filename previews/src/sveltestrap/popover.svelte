<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-popovers--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Popover } from '@sveltestrap/sveltestrap'
</script>

<Button id="popover-target" color="secondary">Show details</Button>

<Popover target="popover-target" placement="bottom" title="Details" isOpen>
	Popovers can hold a title and a short body.
</Popover>
