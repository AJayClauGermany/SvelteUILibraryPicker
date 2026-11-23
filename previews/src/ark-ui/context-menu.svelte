<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/menu#context-menu
-->
<script lang="ts">
	import { Menu } from '@ark-ui/svelte/menu'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<Menu.Root>
	<Menu.ContextTrigger>Right-click anywhere in this text</Menu.ContextTrigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Menu.Item value="copy">Copy</Menu.Item>
				<Menu.Item value="paste">Paste</Menu.Item>
				<Menu.Separator />
				<Menu.Item value="inspect">Inspect</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu.Root>
