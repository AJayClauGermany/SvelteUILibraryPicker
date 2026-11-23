<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/utilities/toolbar
-->
<script lang="ts">
	import './styles.css'
	import { Button, Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte'
</script>

<Toolbar>
	<ToolbarGroup>
		<ToolbarButton name="Bold"><b>B</b></ToolbarButton>
		<ToolbarButton name="Italic"><i>I</i></ToolbarButton>
		<ToolbarButton name="Underline"><u>U</u></ToolbarButton>
	</ToolbarGroup>
	<ToolbarGroup>
		<ToolbarButton>Undo</ToolbarButton>
		<ToolbarButton>Redo</ToolbarButton>
	</ToolbarGroup>
	{#snippet end()}
		<Button size="sm">Save</Button>
	{/snippet}
</Toolbar>
