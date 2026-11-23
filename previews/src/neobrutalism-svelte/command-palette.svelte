<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/command
-->
<script lang="ts">
	import './styles.css'
	import * as Command from './ui/command/index.ts'
</script>

<Command.Root class="rounded-lg border shadow-md">
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
		</Command.Group>
	</Command.List>
</Command.Root>
