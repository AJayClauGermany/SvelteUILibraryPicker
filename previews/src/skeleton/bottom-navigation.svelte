<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  This is the Navigation component with its default layout="bar"; the links are text only.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/navigation#bar
-->
<script lang="ts">
	import './styles.css'
	import { Navigation } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const links = ['Home', 'Search', 'Inbox', 'Profile']
</script>

<Navigation layout="bar">
	<Navigation.Menu>
		{#each links as link (link)}
			<Navigation.TriggerAnchor href="#{link.toLowerCase()}">
				<Navigation.TriggerText>{link}</Navigation.TriggerText>
			</Navigation.TriggerAnchor>
		{/each}
	</Navigation.Menu>
</Navigation>
