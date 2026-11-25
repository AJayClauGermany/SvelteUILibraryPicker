<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/toolbar-tabbar.html
-->
<script lang="ts">
	import { Block, Link, Toolbar } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Toolbar bottom>
		<Link>Reply</Link>
		<Link>Forward</Link>
		<Link>Archive</Link>
	</Toolbar>
	<Block>
		<p>The toolbar is pinned to the bottom of the page.</p>
	</Block>
</F7App>
