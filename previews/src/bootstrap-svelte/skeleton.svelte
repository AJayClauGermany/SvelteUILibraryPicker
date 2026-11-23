<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/placeholder
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Placeholder } from '@winkintel/bootstrap-svelte'
</script>

<Placeholder.Root type="glow" aria-hidden="true">
	<Placeholder.Item class="col-5" size="lg" />
	<Placeholder.Item class="col-9" />
	<Placeholder.Item class="col-7" />
	<Placeholder.Item class="col-4" />
</Placeholder.Root>
