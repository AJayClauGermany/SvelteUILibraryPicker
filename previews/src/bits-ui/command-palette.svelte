<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/command
-->
<script lang="ts">
	import { Command } from 'bits-ui'
</script>

<Command.Root>
	<Command.Input placeholder="Type a command" />
	<Command.List>
		<Command.Viewport>
			<Command.Empty>No results</Command.Empty>
			<Command.Group>
				<Command.GroupHeading>Files</Command.GroupHeading>
				<Command.GroupItems>
					<Command.Item>New file</Command.Item>
					<Command.Item>Open file</Command.Item>
				</Command.GroupItems>
			</Command.Group>
			<Command.Separator />
			<Command.Group>
				<Command.GroupHeading>Settings</Command.GroupHeading>
				<Command.GroupItems>
					<Command.Item keywords={['theme', 'dark']}>Change theme</Command.Item>
					<Command.Item>Keyboard shortcuts</Command.Item>
				</Command.GroupItems>
			</Command.Group>
		</Command.Viewport>
	</Command.List>
</Command.Root>
