<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-spinner--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Spinner } from '@sveltestrap/sveltestrap'
</script>

<Spinner color="primary" />
<Spinner color="secondary" type="grow" />
<Spinner color="success" size="sm" />
