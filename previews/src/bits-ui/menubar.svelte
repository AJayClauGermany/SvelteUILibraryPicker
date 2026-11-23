<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/menubar
-->
<script lang="ts">
	import { Menubar } from 'bits-ui'
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>File</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>New file</Menubar.Item>
				<Menubar.Item>Open…</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item disabled>Save</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Edit</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>Undo</Menubar.Item>
				<Menubar.Item>Redo</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>View</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>Zoom in</Menubar.Item>
				<Menubar.Item>Zoom out</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
</Menubar.Root>
