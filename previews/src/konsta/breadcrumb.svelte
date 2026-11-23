<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/breadcrumbs
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparator, Link } from 'konsta/svelte'
</script>

<App>
	<Block>
		<Breadcrumbs>
			<BreadcrumbsItem>
				<Link>Home</Link>
			</BreadcrumbsItem>
			<BreadcrumbsSeparator />
			<BreadcrumbsItem>
				<Link>Docs</Link>
			</BreadcrumbsItem>
			<BreadcrumbsSeparator />
			<BreadcrumbsItem active>Components</BreadcrumbsItem>
		</Breadcrumbs>
	</Block>
</App>
