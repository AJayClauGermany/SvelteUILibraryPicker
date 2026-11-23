<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/action-sheet
-->
<script lang="ts">
	import './styles.css'
	import { Actions, ActionsButton, ActionsGroup, ActionsLabel, App, Block, Button } from 'konsta/svelte'

	let opened = $state(false)
	const close = () => (opened = false)
</script>

<App>
	<Block>
		<Button inline onclick={() => (opened = true)}>Share file</Button>
	</Block>
	<Actions {opened} onBackdropClick={close}>
		<ActionsGroup>
			<ActionsLabel>Share report.pdf</ActionsLabel>
			<ActionsButton bold onclick={close}>Copy link</ActionsButton>
			<ActionsButton onclick={close}>Send by email</ActionsButton>
			<ActionsButton onclick={close}>Cancel</ActionsButton>
		</ActionsGroup>
	</Actions>
</App>
