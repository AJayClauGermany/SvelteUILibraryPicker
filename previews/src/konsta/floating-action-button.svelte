<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/fab
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Fab } from 'konsta/svelte'
</script>

{#snippet plus()}
	<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
		<path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
	</svg>
{/snippet}

<App>
	<Block>
		<Fab icon={plus} aria-label="Add" />
	</Block>
</App>
