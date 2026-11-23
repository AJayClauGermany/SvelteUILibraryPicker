<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/code-block
-->
<script lang="ts">
	import './styles.css'
	import { CodeBlock } from '@sivir-ui/svelte/components/code-block'

	const ts = `function add(a: number, b: number) {
	return a + b
}`

	const py = `def add(a: int, b: int) -> int:
    return a + b`
</script>

<CodeBlock
	class="max-w-xl"
	value="typescript"
	tabs={[
		{ label: 'TypeScript', lang: 'typescript', code: ts },
		{ label: 'Python', lang: 'python', code: py }
	]}
/>
