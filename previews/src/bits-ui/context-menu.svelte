<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/context-menu
-->
<script lang="ts">
	import { ContextMenu } from 'bits-ui'
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger>Right-click this area</ContextMenu.Trigger>
	<ContextMenu.Portal>
		<ContextMenu.Content>
			<ContextMenu.Item>Copy</ContextMenu.Item>
			<ContextMenu.Item>Paste</ContextMenu.Item>
			<ContextMenu.Separator />
			<ContextMenu.Item disabled>Delete</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Portal>
</ContextMenu.Root>
