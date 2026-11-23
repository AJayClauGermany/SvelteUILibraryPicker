<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/list
-->
<script lang="ts">
	import './styles.css'
	import { App, BlockTitle, List, ListItem } from 'konsta/svelte'
</script>

<App>
	<BlockTitle>Settings</BlockTitle>
	<List>
		<ListItem title="Account" subtitle="Name, email, password" />
		<ListItem link title="Notifications" after="On" />
		<ListItem link title="Language" after="English" />
	</List>
</App>
