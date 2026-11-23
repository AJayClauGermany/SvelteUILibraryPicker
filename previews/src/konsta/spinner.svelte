<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/preloader
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Preloader } from 'konsta/svelte'
</script>

<App>
	<Block>
		<Preloader />
	</Block>
</App>
