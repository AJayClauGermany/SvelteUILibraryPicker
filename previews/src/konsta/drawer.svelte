<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/panel
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, Link, Navbar, Page, Panel } from 'konsta/svelte'

	let opened = $state(false)
</script>

<App>
	<Block>
		<Button inline onclick={() => (opened = true)}>Open panel</Button>
	</Block>
	<Panel side="left" {opened} onBackdropClick={() => (opened = false)}>
		<Page>
			<Navbar title="Menu">
				{#snippet right()}
					<Link onclick={() => (opened = false)}>Close</Link>
				{/snippet}
			</Navbar>
			<Block>
				<p>Panels slide in from the side of the screen.</p>
			</Block>
		</Page>
	</Panel>
</App>
