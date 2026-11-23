<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/breadcrumb
-->
<script lang="ts">
	import './styles.css'
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
</script>

<p>Default:</p>
<Breadcrumb>
	<BreadcrumbItem href="#home" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
	<BreadcrumbItem>Website redesign</BreadcrumbItem>
</Breadcrumb>

<p>Solid:</p>
<Breadcrumb solid>
	<BreadcrumbItem href="#home" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="#docs">Docs</BreadcrumbItem>
	<BreadcrumbItem>Getting started</BreadcrumbItem>
</Breadcrumb>
