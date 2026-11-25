<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/badge.html
-->
<script lang="ts">
	import { Badge, Block, List, ListItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Badge>4</Badge>
		<Badge color="green">New</Badge>
		<Badge color="red">99+</Badge>
	</Block>
	<List>
		<ListItem title="Inbox" badge="12" />
		<ListItem title="Drafts" badge="2" badgeColor="orange" />
	</List>
</F7App>
