<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  A sortable List: drag an item by its handle to reorder.
  Docs: https://framework7.io/svelte/sortable.html
-->
<script lang="ts">
	import { List, ListItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List sortable sortableEnabled>
		<ListItem title="Write the brief" />
		<ListItem title="Review designs" />
		<ListItem title="Ship the update" />
		<ListItem title="Collect feedback" />
	</List>
</F7App>
