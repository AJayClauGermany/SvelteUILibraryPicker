<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/context-menu
-->
<script lang="ts">
	import './styles.css'
	import * as ContextMenu from './ui/context-menu/index.js'

	let showHidden = $state(false)
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger
		class="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm"
	>
		Right click here
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item>
			Rename
			<ContextMenu.Shortcut>F2</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Item>Duplicate</ContextMenu.Item>
		<ContextMenu.Item disabled>Move to…</ContextMenu.Item>
		<ContextMenu.Separator />
		<ContextMenu.CheckboxItem bind:checked={showHidden}>Show hidden files</ContextMenu.CheckboxItem>
		<ContextMenu.Separator />
		<ContextMenu.Item variant="destructive">Delete</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
