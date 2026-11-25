<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. The docs open the base Command
  in a dialog; here it is shown inline.
  Docs: https://originui-svelte.pages.dev/dialogs/dialog-21
-->
<script lang="ts">
	import './styles.css'
	import * as Command from './ui/command/index.js'
</script>

<Command.Root>
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
