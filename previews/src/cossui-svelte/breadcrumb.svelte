<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/breadcrumb
-->
<script lang="ts">
	import './styles.css'
	import {
		Breadcrumb,
		BreadcrumbEllipsis,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator,
	} from './ui/breadcrumb/index.ts'
</script>

<Breadcrumb>
	<BreadcrumbList>
		<BreadcrumbItem>
			<BreadcrumbLink href="#home">Home</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator />
		<BreadcrumbItem>
			<BreadcrumbEllipsis />
		</BreadcrumbItem>
		<BreadcrumbSeparator />
		<BreadcrumbItem>
			<BreadcrumbLink href="#settings">Settings</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator />
		<BreadcrumbItem>
			<BreadcrumbPage>Profile</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
