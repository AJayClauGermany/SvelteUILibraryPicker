<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/breadcrumb
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Breadcrumb } from '@winkintel/bootstrap-svelte'
</script>

<Breadcrumb.Root ariaLabel="breadcrumb">
	<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
	<Breadcrumb.Item href="#!">Projects</Breadcrumb.Item>
	<Breadcrumb.Item isActive>Settings</Breadcrumb.Item>
</Breadcrumb.Root>
