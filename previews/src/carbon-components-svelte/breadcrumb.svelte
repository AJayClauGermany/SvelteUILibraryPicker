<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Breadcrumb
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Breadcrumb, BreadcrumbItem } from 'carbon-components-svelte'
</script>

<Breadcrumb>
	<BreadcrumbItem href="#home">Home</BreadcrumbItem>
	<BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
	<BreadcrumbItem href="#report" isCurrentPage>Annual report</BreadcrumbItem>
</Breadcrumb>
