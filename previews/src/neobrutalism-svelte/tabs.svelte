<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/tabs
-->
<script lang="ts">
	import './styles.css'
	import * as Tabs from './ui/tabs/index.ts'
</script>

<Tabs.Root value="profile" class="w-[400px]">
	<Tabs.List>
		<Tabs.Trigger value="profile">Profile</Tabs.Trigger>
		<Tabs.Trigger value="billing">Billing</Tabs.Trigger>
		<Tabs.Trigger value="alerts" disabled>Alerts</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="profile">Your name and avatar live here.</Tabs.Content>
	<Tabs.Content value="billing">Plans, invoices and payment methods.</Tabs.Content>
	<Tabs.Content value="alerts">Notification settings.</Tabs.Content>
</Tabs.Root>
