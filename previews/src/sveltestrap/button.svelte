<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-button--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button } from '@sveltestrap/sveltestrap'
</script>

<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="primary" outline>Outline</Button>
