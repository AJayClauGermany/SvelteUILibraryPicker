<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/tabs
-->
<script lang="ts">
	import './styles.css'
	import * as Tabs from '@sivir-ui/svelte/components/tabs'

	let tab = $state('profile')
</script>

<div class="w-full max-w-sm">
	<Tabs.Root bind:value={tab}>
		<Tabs.List>
			<Tabs.Trigger value="profile">Profile</Tabs.Trigger>
			<Tabs.Trigger value="billing">Billing</Tabs.Trigger>
			<Tabs.Trigger value="team" disabled>Team</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="profile">Your name, photo and bio.</Tabs.Content>
		<Tabs.Content value="billing">Your plan and invoices.</Tabs.Content>
		<Tabs.Content value="team">Members and roles.</Tabs.Content>
	</Tabs.Root>
</div>
