<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/alert
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Alert } from '@winkintel/bootstrap-svelte'
</script>

<Alert colorVariant="primary">Your changes were saved.</Alert>
<Alert colorVariant="danger">The upload failed. Please try again.</Alert>
<Alert colorVariant="warning" isDismissible={true}>
	<strong>Heads up:</strong> your trial ends in three days.
</Alert>
