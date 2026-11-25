<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/navbar.html
-->
<script lang="ts">
	import { Block, Link, Navbar, NavRight } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Navbar title="Inbox" subtitle="3 unread" backLink="Back">
		<NavRight>
			<Link>Edit</Link>
		</NavRight>
	</Navbar>
	<Block>
		<p>The navbar stays at the top of the page while its content scrolls.</p>
	</Block>
</F7App>
