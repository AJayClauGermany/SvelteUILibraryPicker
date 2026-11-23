<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/code-block
-->
<script lang="ts">
	import './styles.css'
	import * as CodeBlock from './ui/code-block/index.js'

	const output = `$ pnpm build
vite v7 building for production...
✓ 128 modules transformed.
✓ built in 1.42s`
</script>

<CodeBlock.Root class="max-w-lg">
	<CodeBlock.Header>
		<CodeBlock.Title>Terminal</CodeBlock.Title>
		<CodeBlock.Actions>
			<CodeBlock.CopyButton value={output} />
		</CodeBlock.Actions>
	</CodeBlock.Header>
	<CodeBlock.Content code={output} lineNumbers />
</CodeBlock.Root>
