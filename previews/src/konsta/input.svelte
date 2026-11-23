<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/list-input
-->
<script lang="ts">
	import './styles.css'
	import { App, List, ListInput } from 'konsta/svelte'

	let name = $state('')
</script>

<App>
	<List>
		<ListInput label="Name" type="text" placeholder="Your name" bind:value={name} />
		<ListInput label="Email" type="email" placeholder="you@example.com" info="We never share it" />
		<ListInput label="Password" type="password" placeholder="Password" error="Too short" />
	</List>
</App>
