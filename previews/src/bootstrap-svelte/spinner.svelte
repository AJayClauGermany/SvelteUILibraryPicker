<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/spinner
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Spinner } from '@winkintel/bootstrap-svelte'
</script>

<Spinner>
	<span class="visually-hidden">Loading...</span>
</Spinner>
<Spinner colorVariant="primary" type="grow">
	<span class="visually-hidden">Loading...</span>
</Spinner>
<Spinner size="sm">
	<span class="visually-hidden">Loading...</span>
</Spinner>
