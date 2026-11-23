<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/popover
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, List, ListItem, Popover } from 'konsta/svelte'

	let opened = $state(false)
	let target = $state<HTMLElement | undefined>()
	const close = () => (opened = false)
</script>

<App>
	<Block>
		<Button
			inline
			onclick={(e: MouseEvent) => {
				target = e.currentTarget as HTMLElement
				opened = true
			}}
		>
			Sort by
		</Button>
	</Block>
	<Popover {opened} {target} onBackdropClick={close}>
		<List nested>
			<ListItem title="Name" link onclick={close} />
			<ListItem title="Date" link onclick={close} />
			<ListItem title="Size" link onclick={close} />
		</List>
	</Popover>
</App>
