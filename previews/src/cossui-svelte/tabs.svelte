<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/tabs
-->
<script lang="ts">
	import './styles.css'
	import { Tabs, TabsList, TabsPanel, TabsTab } from './ui/tabs/index.ts'
</script>

<Tabs value="account">
	<TabsList>
		<TabsTab value="account">Account</TabsTab>
		<TabsTab value="password">Password</TabsTab>
		<TabsTab value="billing">Billing</TabsTab>
	</TabsList>
	<TabsPanel value="account">Update your name and email.</TabsPanel>
	<TabsPanel value="password">Change your password here.</TabsPanel>
	<TabsPanel value="billing">Manage your plan and invoices.</TabsPanel>
</Tabs>
