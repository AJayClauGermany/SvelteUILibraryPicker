<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ContextMenu
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ContextMenu, ContextMenuDivider, ContextMenuOption } from 'carbon-components-svelte'
</script>

<p>Right-click anywhere in this preview.</p>

<ContextMenu labelText="File actions">
	<ContextMenuOption labelText="Open" />
	<ContextMenuOption labelText="Copy" shortcutText="⌘C" />
	<ContextMenuDivider />
	<ContextMenuOption kind="danger" labelText="Delete" />
</ContextMenu>
