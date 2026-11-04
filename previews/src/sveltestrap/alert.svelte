<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-alerts--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Alert } from '@sveltestrap/sveltestrap'
</script>

<Alert color="success">Your changes were saved.</Alert>
<Alert color="warning" dismissible>Check your input before continuing.</Alert>
