<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Popover
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Button, Popover } from 'carbon-components-svelte'

	let open = $state(true)
</script>

<Button kind="secondary" on:click={() => (open = !open)}>Toggle popover</Button>

<Popover bind:open relative caret align="bottom-left" closeOnEscape>
	<p>Popover content sits next to its trigger.</p>
</Popover>
