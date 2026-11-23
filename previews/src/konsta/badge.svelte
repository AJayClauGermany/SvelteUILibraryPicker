<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/badge
-->
<script lang="ts">
	import './styles.css'
	import { App, Badge, List, ListItem } from 'konsta/svelte'
</script>

<App>
	<List>
		<ListItem title="Inbox">
			{#snippet after()}
				<Badge>12</Badge>
			{/snippet}
		</ListItem>
		<ListItem title="Updates">
			{#snippet after()}
				<Badge small>New</Badge>
			{/snippet}
		</ListItem>
	</List>
</App>
