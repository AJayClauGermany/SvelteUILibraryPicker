<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/dialog
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, Dialog, DialogButton } from 'konsta/svelte'

	let opened = $state(false)
</script>

<App>
	<Block>
		<Button onclick={() => (opened = true)}>Delete file</Button>
	</Block>
	<Dialog {opened} onBackdropClick={() => (opened = false)}>
		{#snippet title()}Delete file?{/snippet}
		This cannot be undone.
		{#snippet buttons()}
			<DialogButton onclick={() => (opened = false)}>Cancel</DialogButton>
			<DialogButton strong onclick={() => (opened = false)}>Delete</DialogButton>
		{/snippet}
	</Dialog>
</App>
