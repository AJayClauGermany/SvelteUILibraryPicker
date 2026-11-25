<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/breadcrumb/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Breadcrumb, BreadcrumbItem } from 'svelte-5-ui-lib'
</script>

<Breadcrumb>
	<BreadcrumbItem href="#home" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
	<BreadcrumbItem>Website</BreadcrumbItem>
</Breadcrumb>
