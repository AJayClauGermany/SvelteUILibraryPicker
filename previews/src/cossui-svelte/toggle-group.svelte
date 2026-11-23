<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/toggle-group
-->
<script lang="ts">
	import './styles.css'
	import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group/index.ts'

	let value = $state(['left'])
</script>

<ToggleGroup bind:value>
	<ToggleGroupItem value="left">Left</ToggleGroupItem>
	<ToggleGroupItem value="center">Center</ToggleGroupItem>
	<ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
