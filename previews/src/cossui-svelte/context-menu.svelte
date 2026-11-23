<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/context-menu
-->
<script lang="ts">
	import './styles.css'
	import {
		ContextMenu,
		ContextMenuItem,
		ContextMenuPopup,
		ContextMenuSeparator,
		ContextMenuTrigger,
	} from './ui/context-menu/index.ts'
</script>

<ContextMenu>
	<ContextMenuTrigger class="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
		Right-click this area
	</ContextMenuTrigger>
	<ContextMenuPopup>
		<ContextMenuItem>Copy</ContextMenuItem>
		<ContextMenuItem>Paste</ContextMenuItem>
		<ContextMenuSeparator />
		<ContextMenuItem>Rename</ContextMenuItem>
	</ContextMenuPopup>
</ContextMenu>
