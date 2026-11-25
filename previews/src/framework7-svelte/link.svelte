<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/link.html
-->
<script lang="ts">
	import { Block, Link } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<p>
			Read the <Link>release notes</Link> or <Link color="red">report a problem</Link>.
		</p>
		<p>
			<Link href="https://framework7.io/" external target="_blank">Framework7 website</Link>
		</p>
	</Block>
</F7App>
