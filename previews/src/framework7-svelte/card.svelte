<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/cards.html
-->
<script lang="ts">
	import { Card, CardContent, CardFooter, CardHeader, Link } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Card title="Plain card" content="A card built from its title and content props." />
	<Card outline>
		<CardHeader>Weekly report</CardHeader>
		<CardContent>
			<p>Sales grew in every region this week.</p>
		</CardContent>
		<CardFooter>
			<Link>Dismiss</Link>
			<Link>Open</Link>
		</CardFooter>
	</Card>
</F7App>
