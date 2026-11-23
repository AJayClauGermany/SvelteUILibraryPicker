<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/CodeSnippet
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { CodeSnippet } from 'carbon-components-svelte'

	const code = [
		'export function greet(name: string) {',
		"  return 'Hello, ' + name",
		'}',
		'',
		"console.log(greet('Svelte'))",
	].join('\n')
</script>

<p>Run <CodeSnippet type="inline" code="pnpm dev" /> to start.</p>
<br />
<CodeSnippet code="pnpm add carbon-components-svelte" />
<br />
<CodeSnippet type="multi" {code} />
