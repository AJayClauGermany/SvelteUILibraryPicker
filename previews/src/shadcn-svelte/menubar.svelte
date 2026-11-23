<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/menubar
-->
<script lang="ts">
	import './styles.css'
	import * as Menubar from './ui/menubar/index.js'
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>File</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				New file
				<Menubar.Shortcut>⌘N</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>Open…</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Export</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Edit</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>Undo</Menubar.Item>
			<Menubar.Item>Redo</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>View</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.CheckboxItem checked>Show sidebar</Menubar.CheckboxItem>
			<Menubar.CheckboxItem>Show status bar</Menubar.CheckboxItem>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
