<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-breadcrumbs--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Breadcrumb, BreadcrumbItem } from '@sveltestrap/sveltestrap'
</script>

<Breadcrumb>
	<BreadcrumbItem><a href="#home">Home</a></BreadcrumbItem>
	<BreadcrumbItem><a href="#projects">Projects</a></BreadcrumbItem>
	<BreadcrumbItem active>Settings</BreadcrumbItem>
</Breadcrumb>
