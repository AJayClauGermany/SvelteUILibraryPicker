<!--
  CodeMirror 6's built-in base theme, unchanged: no `theme` or `styles` prop, so the editor uses
  CodeMirror's default look and the component's default features (line numbers, fold gutter, etc.).
  The JavaScript mode comes from @codemirror/lang-javascript, passed in through `lang`.
  Docs: https://github.com/touchifyapp/svelte-codemirror-editor#readme
-->
<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor'
	import { javascript } from '@codemirror/lang-javascript'

	let value = $state(`// Sum the prices in a small basket
const basket = [
	{ item: 'pear', price: 0.8 },
	{ item: 'bread', price: 2.4 },
]

function total(items) {
	let sum = 0
	for (const row of items) sum += row.price
	return sum
}

console.log(total(basket))
`)
</script>

<CodeMirror bind:value lang={javascript()} />
