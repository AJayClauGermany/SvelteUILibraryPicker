<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-buttongroup--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, ButtonGroup } from '@sveltestrap/sveltestrap'
</script>

<ButtonGroup>
	<Button color="primary">Left</Button>
	<Button color="primary">Middle</Button>
	<Button color="primary">Right</Button>
</ButtonGroup>
