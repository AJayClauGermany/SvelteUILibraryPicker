<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/list-input
-->
<script lang="ts">
	import './styles.css'
	import { App, List, ListInput } from 'konsta/svelte'

	let fruit = $state('apple')
</script>

<App>
	<List>
		<ListInput label="Fruit" type="select" dropdown bind:value={fruit}>
			<option value="apple">Apple</option>
			<option value="banana">Banana</option>
			<option value="cherry">Cherry</option>
		</ListInput>
	</List>
</App>
