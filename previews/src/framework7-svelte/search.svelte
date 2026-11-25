<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  The Searchbar filters the list in place; searchbar-found / searchbar-not-found are its classes.
  Docs: https://framework7.io/svelte/searchbar.html
-->
<script lang="ts">
	import { List, ListItem, Navbar, Searchbar, Subnavbar } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Navbar title="Fruit">
		<Subnavbar inner={false}>
			<Searchbar searchContainer=".preview-search-list" searchIn=".item-title" />
		</Subnavbar>
	</Navbar>
	<List class="searchbar-not-found">
		<ListItem title="Nothing found" />
	</List>
	<List class="preview-search-list searchbar-found">
		<ListItem title="Apple" />
		<ListItem title="Banana" />
		<ListItem title="Cherry" />
		<ListItem title="Grape" />
		<ListItem title="Mango" />
	</List>
</F7App>
