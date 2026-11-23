<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/command
-->
<script lang="ts">
	import './styles.css'
	import * as Command from './ui/command/index.js'
</script>

<Command.Root class="max-w-sm rounded-lg border">
	<Command.Input placeholder="Search actions..." />
	<Command.List>
		<Command.Empty>Nothing matches.</Command.Empty>
		<Command.Group heading="Files">
			<Command.Item>New file</Command.Item>
			<Command.Item>Open recent</Command.Item>
			<Command.Item disabled>Save all</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="View">
			<Command.Item>
				Toggle sidebar
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				Zoom in
				<Command.Shortcut>⌘+</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Root>
