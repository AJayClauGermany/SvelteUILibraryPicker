<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/toolbar
-->
<script lang="ts">
	import './styles.css'
	import { Button } from './ui/button/index.ts'
	import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group/index.ts'
	import { Toolbar, ToolbarGroup, ToolbarSeparator } from './ui/toolbar/index.ts'

	let marks = $state(['bold'])
</script>

<Toolbar>
	<ToggleGroup bind:value={marks} multiple>
		<ToggleGroupItem value="bold">Bold</ToggleGroupItem>
		<ToggleGroupItem value="italic">Italic</ToggleGroupItem>
		<ToggleGroupItem value="underline">Underline</ToggleGroupItem>
	</ToggleGroup>
	<ToolbarSeparator />
	<ToolbarGroup>
		<Button>Publish</Button>
	</ToolbarGroup>
</Toolbar>
