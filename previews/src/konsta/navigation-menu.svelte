<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/navbar
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Link, Navbar, NavbarBackLink } from 'konsta/svelte'
</script>

<App>
	<Navbar title="Inbox" subtitle="3 unread">
		{#snippet left()}
			<NavbarBackLink />
		{/snippet}
		{#snippet right()}
			<Link>Edit</Link>
		{/snippet}
	</Navbar>
	<Block>
		<p>Page content goes below the navbar.</p>
	</Block>
</App>
