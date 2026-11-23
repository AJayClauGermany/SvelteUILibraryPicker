<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/progressbar
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, Progressbar } from 'konsta/svelte'

	let progress = $state(0.3)
</script>

<App>
	<Block>
		<Progressbar {progress} />
	</Block>
	<Block>
		<Button inline onclick={() => (progress = progress >= 1 ? 0 : progress + 0.1)}>Advance</Button>
	</Block>
</App>
