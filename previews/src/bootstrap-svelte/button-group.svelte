<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/button-group
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, ButtonGroup } from '@winkintel/bootstrap-svelte'
</script>

<ButtonGroup ariaLabel="Text alignment">
	<Button colorVariant="primary">Left</Button>
	<Button colorVariant="primary">Center</Button>
	<Button colorVariant="primary">Right</Button>
</ButtonGroup>
