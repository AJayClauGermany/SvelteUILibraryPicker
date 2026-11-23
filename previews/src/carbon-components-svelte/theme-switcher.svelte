<!--
  Carbon ships its own CSS; all.css bundles its themes and Theme writes the `theme` attribute
  on <html>. It starts from the site's mode: "white" (its default) or "g100" in dark mode.
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Theme
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Theme } from 'carbon-components-svelte'
	import { theme } from '../../theme.svelte.ts'

	let current = $state<'white' | 'g100'>(theme.current === 'dark' ? 'g100' : 'white')
</script>

<Theme bind:theme={current} render="toggle" />
