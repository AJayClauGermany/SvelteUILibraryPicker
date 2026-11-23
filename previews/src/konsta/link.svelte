<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/link
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Link } from 'konsta/svelte'
</script>

<App>
	<Block>
		<p>Read the <Link href="#guide">getting started guide</Link> before you begin.</p>
	</Block>
</App>
