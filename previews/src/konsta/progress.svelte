<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/progressbar
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, Progressbar } from 'konsta/svelte'

	let percent = $state(30)
</script>

<App>
	<Block>
		<Progressbar progress={percent / 100} />
	</Block>
	<Block>
		<Button inline onclick={() => (percent = percent >= 100 ? 0 : percent + 10)}>Advance</Button>
	</Block>
</App>
