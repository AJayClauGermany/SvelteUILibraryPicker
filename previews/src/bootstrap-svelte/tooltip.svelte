<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/tooltip
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Tooltip } from '@winkintel/bootstrap-svelte'
</script>

<Button id="save-button" colorVariant="primary">Save</Button>

<Tooltip.Root trigger="hover focus" referenceElementId="save-button">
	<Tooltip.Inner>Saves your changes</Tooltip.Inner>
</Tooltip.Root>
