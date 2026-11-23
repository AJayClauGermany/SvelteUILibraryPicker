<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/range
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, BlockTitle, Range } from 'konsta/svelte'

	let volume = $state(40)
</script>

<App>
	<BlockTitle>Volume: {volume}</BlockTitle>
	<Block>
		<Range bind:value={volume} />
	</Block>
</App>
