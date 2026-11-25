<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/tabs
-->
<script lang="ts">
	import './styles.css'
	import * as Tabs from './ui/tabs/index.js'
</script>

<Tabs.Root value="overview">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="activity">Activity</Tabs.Trigger>
		<Tabs.Trigger value="settings" disabled>Settings</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview">Three projects were updated this week.</Tabs.Content>
	<Tabs.Content value="activity">No new activity.</Tabs.Content>
</Tabs.Root>
