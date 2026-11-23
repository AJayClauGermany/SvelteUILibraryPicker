<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-progress--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Progress } from '@sveltestrap/sveltestrap'
</script>

<Progress value={25} />
<Progress value={50} color="success">50%</Progress>
<Progress value={75} striped color="info" />
<Progress animated value={60} color="warning" />
