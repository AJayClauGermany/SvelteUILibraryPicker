<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-badges--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Badge } from '@sveltestrap/sveltestrap'
</script>

<Badge color="primary">New</Badge>
<Badge color="secondary">Draft</Badge>
<Badge color="success" pill>42</Badge>
