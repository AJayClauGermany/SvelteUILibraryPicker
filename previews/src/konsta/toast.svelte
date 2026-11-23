<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/toast
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, Toast } from 'konsta/svelte'

	let opened = $state(false)
</script>

<App>
	<Block>
		<Button onclick={() => (opened = true)}>Save draft</Button>
	</Block>
	<Toast {opened}>
		Draft saved
		{#snippet button()}
			<Button clear inline small onclick={() => (opened = false)}>Close</Button>
		{/snippet}
	</Toast>
</App>
