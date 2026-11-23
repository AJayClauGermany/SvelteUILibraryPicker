<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/command
-->
<script lang="ts">
	import './styles.css'
	import * as Command from './ui/command/index.js'
</script>

<Command.Root class="rounded-lg border shadow-md">
	<Command.Input placeholder="Search actions..." />
	<Command.List>
		<Command.Empty>Nothing found.</Command.Empty>
		<Command.Group heading="Files">
			<Command.Item>New file</Command.Item>
			<Command.Item>Open recent</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Account">
			<Command.Item>Profile</Command.Item>
			<Command.Item>Sign out</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Root>
