<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/progress
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { ProgressBar } from '@winkintel/bootstrap-svelte'
</script>

<ProgressBar valueNow={40} ariaLabel="Upload progress" />
<br />
<ProgressBar valueNow={70} backgroundColorVariant="success" ariaLabel="Disk usage">70%</ProgressBar>
