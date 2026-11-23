<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/tabs
-->
<script lang="ts">
	import './styles.css'
	import * as Tabs from './ui/tabs/index.js'
</script>

<Tabs.Root value="overview">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="activity">Activity</Tabs.Trigger>
		<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview">A short summary of the project.</Tabs.Content>
	<Tabs.Content value="activity">The latest changes and comments.</Tabs.Content>
	<Tabs.Content value="settings">Options for this project.</Tabs.Content>
</Tabs.Root>
