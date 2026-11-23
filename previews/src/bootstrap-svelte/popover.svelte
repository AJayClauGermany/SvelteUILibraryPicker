<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/popover
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Popover } from '@winkintel/bootstrap-svelte'
</script>

<Button id="info-button" colorVariant="primary">Shipping info</Button>

<Popover.Root referenceElementId="info-button">
	<Popover.Header>Free shipping</Popover.Header>
	<Popover.Body>Orders over $50 ship free within 3 to 5 days.</Popover.Body>
</Popover.Root>
