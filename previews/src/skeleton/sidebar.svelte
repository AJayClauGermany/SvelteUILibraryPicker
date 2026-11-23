<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  This is the Navigation component with layout="sidebar"; the links are text only.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/navigation
-->
<script lang="ts">
	import './styles.css'
	import { Navigation } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const groups = {
		Workspace: ['Dashboard', 'Projects', 'Reports'],
		Account: ['Profile', 'Settings']
	}
</script>

<Navigation layout="sidebar">
	<Navigation.Content>
		{#each Object.entries(groups) as [label, links] (label)}
			<Navigation.Group>
				<Navigation.Label>{label}</Navigation.Label>
				<Navigation.Menu>
					{#each links as link (link)}
						<Navigation.TriggerAnchor href="#{link.toLowerCase()}">
							<Navigation.TriggerText>{link}</Navigation.TriggerText>
						</Navigation.TriggerAnchor>
					{/each}
				</Navigation.Menu>
			</Navigation.Group>
		{/each}
	</Navigation.Content>
</Navigation>
