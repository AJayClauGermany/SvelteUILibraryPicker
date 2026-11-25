<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/breadcrumb
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Breadcrumb, BreadcrumbItem } from 'yesvelte'
</script>

<Breadcrumb>
	<BreadcrumbItem href="#">Home</BreadcrumbItem>
	<BreadcrumbItem href="#">Projects</BreadcrumbItem>
	<BreadcrumbItem active>Settings</BreadcrumbItem>
</Breadcrumb>
