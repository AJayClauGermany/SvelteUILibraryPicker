<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/popup
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Button, Link, Navbar, Page, Popup } from 'konsta/svelte'

	let opened = $state(false)
</script>

<App>
	<Block>
		<Button onclick={() => (opened = true)}>Open popup</Button>
	</Block>
	<Popup {opened} onBackdropClick={() => (opened = false)}>
		<Page>
			<Navbar title="Popup">
				{#snippet right()}
					<Link onclick={() => (opened = false)}>Close</Link>
				{/snippet}
			</Navbar>
			<Block>
				<p>Any content can go inside a popup.</p>
			</Block>
		</Page>
	</Popup>
</App>
