<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/breadcrumbs.html
-->
<script lang="ts">
	import { Block, Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparator, Link } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Breadcrumbs>
			<BreadcrumbsItem>
				<Link>Home</Link>
			</BreadcrumbsItem>
			<BreadcrumbsSeparator />
			<BreadcrumbsItem>
				<Link>Projects</Link>
			</BreadcrumbsItem>
			<BreadcrumbsSeparator />
			<BreadcrumbsItem active>Settings</BreadcrumbsItem>
		</Breadcrumbs>
	</Block>
</F7App>
