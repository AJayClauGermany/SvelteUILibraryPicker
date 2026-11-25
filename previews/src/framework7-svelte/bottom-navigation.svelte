<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Text labels only: tab bar icons need the separate Framework7 Icons or Material Icons fonts.
  Docs: https://framework7.io/svelte/toolbar-tabbar.html
-->
<script lang="ts">
	import { Block, Link, Tab, Tabs, Toolbar } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Toolbar tabbar bottom>
		<Link tabLink="#preview-tab-home" tabLinkActive>Home</Link>
		<Link tabLink="#preview-tab-search">Search</Link>
		<Link tabLink="#preview-tab-profile">Profile</Link>
	</Toolbar>
	<Tabs>
		<Tab id="preview-tab-home" tabActive>
			<Block>
				<p>Home tab.</p>
			</Block>
		</Tab>
		<Tab id="preview-tab-search">
			<Block>
				<p>Search tab.</p>
			</Block>
		</Tab>
		<Tab id="preview-tab-profile">
			<Block>
				<p>Profile tab.</p>
			</Block>
		</Tab>
	</Tabs>
</F7App>
