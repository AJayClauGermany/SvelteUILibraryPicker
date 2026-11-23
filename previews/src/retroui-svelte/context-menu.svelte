<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/context-menu
-->
<script lang="ts">
	import './styles.css'
	import * as ContextMenu from './ui/context-menu/index.js'
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger
		class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
	>
		Right-click this area
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item>Copy</ContextMenu.Item>
		<ContextMenu.Item>Paste</ContextMenu.Item>
		<ContextMenu.Separator />
		<ContextMenu.Item>Delete</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
