<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/list-view.html
-->
<script lang="ts">
	import { BlockTitle, List, ListItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<BlockTitle>Team</BlockTitle>
	<List dividers>
		<ListItem title="Ada" after="Admin" />
		<ListItem title="Grace" after="Editor" />
		<ListItem title="Linus" after="Viewer" />
	</List>
	<BlockTitle>Media list</BlockTitle>
	<List mediaList>
		<ListItem title="Release notes" subtitle="Version 2.4" text="Faster sync and a new export option." after="Today" />
		<ListItem title="Maintenance" subtitle="Sunday night" text="The service will be offline for an hour." after="Fri" />
	</List>
</F7App>
