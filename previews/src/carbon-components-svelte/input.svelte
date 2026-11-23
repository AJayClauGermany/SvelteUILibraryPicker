<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/TextInput
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Stack, TextInput } from 'carbon-components-svelte'

	let name = $state('')
</script>

<Stack gap={5}>
	<TextInput labelText="Name" placeholder="Enter your name" helperText="As it appears on your ID" bind:value={name} />
	<TextInput labelText="Email" value="not-an-email" invalid invalidText="Enter a valid email address" />
</Stack>
