<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-tooltip--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Tooltip } from '@sveltestrap/sveltestrap'
</script>

<Button id="tooltip-target" color="secondary">Hover me</Button>

<Tooltip target="tooltip-target" placement="bottom" isOpen>Saves a copy to your drafts</Tooltip>
