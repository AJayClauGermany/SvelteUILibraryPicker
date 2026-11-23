<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Text
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Heading, Section, Text } from 'carbon-components-svelte'
</script>

<Section>
	<Heading>Getting started</Heading>
	<Text>Section and Heading pick the heading level for you, so nesting stays valid.</Text>
	<Section>
		<Heading>Install</Heading>
		<Text color="secondary">Add the package and import its stylesheet.</Text>
		<Text type="code-02">pnpm add carbon-components-svelte</Text>
	</Section>
</Section>
