<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/menu
-->
<script lang="ts">
	import { Menu } from '@ark-ui/svelte/menu'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<Menu.Root>
	<Menu.Trigger>Actions</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Menu.Item value="edit">Edit</Menu.Item>
				<Menu.Item value="duplicate">Duplicate</Menu.Item>
				<Menu.Separator />
				<Menu.Item value="delete">Delete</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu.Root>
