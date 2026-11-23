<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/breadcrumb
-->
<script lang="ts">
	import './styles.css'
	import * as Breadcrumb from './ui/breadcrumb/index.js'
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#docs">Docs</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>Installation</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
