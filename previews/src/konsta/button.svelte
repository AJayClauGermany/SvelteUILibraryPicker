<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/button
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button } from 'konsta/svelte'
</script>

<App>
	<Block>
		<Button>Filled</Button>
	</Block>
	<Block>
		<Button tonal>Tonal</Button>
	</Block>
	<Block>
		<Button outline>Outline</Button>
	</Block>
	<Block>
		<Button inline clear>Clear</Button>
	</Block>
</App>
