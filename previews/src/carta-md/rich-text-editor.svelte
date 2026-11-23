<!--
  Carta ships a default theme stylesheet (carta-md/default.css), imported here as its getting-started
  guide does, with its built-in Shiki highlighting themes. No styles of ours. Its dark mode is CSS
  an app writes itself, so this preview stays light (see previews/theme.svelte.ts).
  Docs: https://beartocode.github.io/carta/getting-started
-->
<script lang="ts">
	import { Carta, MarkdownEditor } from 'carta-md'
	import 'carta-md/default.css'

	// The text is our own fixed sample; a real app should pass an HTML sanitizer here.
	const carta = new Carta({ sanitizer: false })

	let value = $state('## Packing list\n\n- **Tent** and stakes\n- A _warm_ sleeping bag\n- Headlamp')
</script>

<MarkdownEditor bind:value {carta} />
