<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/context-menu
-->
<script lang="ts">
	import './styles.css'
	import * as ContextMenu from '@sivir-ui/svelte/components/context-menu'
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<div
			class="flex h-20 w-56 items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-border text-sm text-foreground-muted"
		>
			Right-click this area
		</div>
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item callback={() => {}}>Back</ContextMenu.Item>
		<ContextMenu.Item callback={() => {}}>Reload</ContextMenu.Item>
		<ContextMenu.Separator />
		<ContextMenu.Sub>
			<ContextMenu.SubTrigger>More tools</ContextMenu.SubTrigger>
			<ContextMenu.SubContent>
				<ContextMenu.Item callback={() => {}}>Save page</ContextMenu.Item>
				<ContextMenu.Item callback={() => {}}>Print</ContextMenu.Item>
			</ContextMenu.SubContent>
		</ContextMenu.Sub>
	</ContextMenu.Content>
</ContextMenu.Root>
