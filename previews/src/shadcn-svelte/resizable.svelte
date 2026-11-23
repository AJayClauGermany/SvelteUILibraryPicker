<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/resizable
-->
<script lang="ts">
	import './styles.css'
	import * as Resizable from './ui/resizable/index.js'
</script>

<Resizable.PaneGroup direction="horizontal" class="max-w-md rounded-lg border">
	<Resizable.Pane defaultSize={40}>
		<div class="flex h-[200px] items-center justify-center p-6">Sidebar</div>
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={60}>
		<div class="flex h-[200px] items-center justify-center p-6">Content</div>
	</Resizable.Pane>
</Resizable.PaneGroup>
