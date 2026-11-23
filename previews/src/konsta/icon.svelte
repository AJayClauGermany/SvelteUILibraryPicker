<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/icon
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Icon } from 'konsta/svelte'
</script>

{#snippet mail()}
	<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
		<path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3v9h16V8l-8 5z" />
	</svg>
{/snippet}

<App>
	<Block>
		<Icon material={mail} aria-label="Mail" />
	</Block>
	<Block>
		<Icon material={mail} badge="5" aria-label="Mail, 5 unread" />
	</Block>
</App>
