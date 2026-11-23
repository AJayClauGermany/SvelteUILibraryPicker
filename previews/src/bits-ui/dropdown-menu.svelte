<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/dropdown-menu
-->
<script lang="ts">
	import { DropdownMenu } from 'bits-ui'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>Options</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content>
			<DropdownMenu.Item>Edit</DropdownMenu.Item>
			<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
