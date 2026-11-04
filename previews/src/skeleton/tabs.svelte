<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/tabs
-->
<script lang="ts">
	import './styles.css'
	import { Tabs } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Tabs defaultValue="overview">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="details">Details</Tabs.Trigger>
		<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content value="overview">Overview content.</Tabs.Content>
	<Tabs.Content value="details">Details content.</Tabs.Content>
	<Tabs.Content value="settings">Settings content.</Tabs.Content>
</Tabs>
