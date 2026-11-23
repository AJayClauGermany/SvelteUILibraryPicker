<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/toggle-group
-->
<script lang="ts">
	import './styles.css'
	import AlignCenterIcon from '@lucide/svelte/icons/align-center'
	import AlignLeftIcon from '@lucide/svelte/icons/align-left'
	import AlignRightIcon from '@lucide/svelte/icons/align-right'
	import * as ToggleGroup from './ui/toggle-group/index.js'

	let align = $state('left')
</script>

<ToggleGroup.Root type="single" bind:value={align}>
	<ToggleGroup.Item value="left" aria-label="Align left">
		<AlignLeftIcon />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="center" aria-label="Align center">
		<AlignCenterIcon />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="right" aria-label="Align right">
		<AlignRightIcon />
	</ToggleGroup.Item>
</ToggleGroup.Root>
