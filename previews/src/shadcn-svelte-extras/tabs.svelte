<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/underline-tabs
-->
<script lang="ts">
	import './styles.css'
	import * as UnderlineTabs from './components/ui/underline-tabs/index.js'
</script>

<UnderlineTabs.Root value="account">
	<UnderlineTabs.List>
		<UnderlineTabs.Trigger value="account">Account</UnderlineTabs.Trigger>
		<UnderlineTabs.Trigger value="billing">Billing</UnderlineTabs.Trigger>
		<UnderlineTabs.Trigger value="team">Team</UnderlineTabs.Trigger>
	</UnderlineTabs.List>
	<UnderlineTabs.Content value="account">Your account details.</UnderlineTabs.Content>
	<UnderlineTabs.Content value="billing">Plans and invoices.</UnderlineTabs.Content>
	<UnderlineTabs.Content value="team">Members and roles.</UnderlineTabs.Content>
</UnderlineTabs.Root>
