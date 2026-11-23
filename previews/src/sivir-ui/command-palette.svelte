<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/command
-->
<script lang="ts">
	import './styles.css'
	import * as Command from '@sivir-ui/svelte/components/command'
</script>

<Command.Root>
	<Command.Trigger variant="outline">Open command menu</Command.Trigger>
	<Command.Content>
		<Command.Search placeholder="Search commands" />
		<Command.Results>
			<Command.Group heading="Pages">
				<Command.Item name="Dashboard">Dashboard</Command.Item>
				<Command.Item name="Settings">Settings</Command.Item>
			</Command.Group>
			<Command.Group heading="Actions">
				<Command.Item name="New file">New file</Command.Item>
				<Command.Item name="Invite member">Invite member</Command.Item>
			</Command.Group>
		</Command.Results>
	</Command.Content>
</Command.Root>
