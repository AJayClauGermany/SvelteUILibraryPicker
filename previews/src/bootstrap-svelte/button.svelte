<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/button
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button } from '@winkintel/bootstrap-svelte'
</script>

<Button colorVariant="primary">Primary</Button>
<Button colorVariant="secondary">Secondary</Button>
<Button colorVariant="outline-primary">Outline</Button>
