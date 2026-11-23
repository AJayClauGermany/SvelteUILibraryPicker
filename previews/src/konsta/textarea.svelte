<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/list-input
-->
<script lang="ts">
	import './styles.css'
	import { App, List, ListInput } from 'konsta/svelte'

	let bio = $state('')
</script>

<App>
	<List>
		<ListInput label="Bio" type="textarea" placeholder="Tell us about yourself" bind:value={bio} />
	</List>
</App>
