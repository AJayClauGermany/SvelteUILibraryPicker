<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/code
-->
<script lang="ts">
	import './styles.css'
	import * as Code from './components/ui/code/index.js'

	const code = `function add(a: number, b: number) {
	return a + b
}`
</script>

<Code.Root lang="typescript" {code}>
	<Code.CopyButton />
</Code.Root>
