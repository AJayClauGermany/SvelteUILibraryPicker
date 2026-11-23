<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/tabs
-->
<script lang="ts">
	import './styles.css'
	import * as Tabs from './ui/tabs/index.js'
</script>

<Tabs.Root value="profile">
	<Tabs.List>
		<Tabs.Trigger value="profile">Profile</Tabs.Trigger>
		<Tabs.Trigger value="billing">Billing</Tabs.Trigger>
		<Tabs.Trigger value="team">Team</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="profile">Update your name and photo.</Tabs.Content>
	<Tabs.Content value="billing">Manage your plan and invoices.</Tabs.Content>
	<Tabs.Content value="team">Invite people to your workspace.</Tabs.Content>
</Tabs.Root>
