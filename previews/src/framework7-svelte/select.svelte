<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Smart Select wraps a native select; by default it opens the choices as a new page in the View.
  Docs: https://framework7.io/svelte/smart-select.html
-->
<script lang="ts">
	import { List, ListItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List>
		<ListItem title="Fruit" smartSelect>
			<select name="fruit">
				<option value="apple" selected>Apple</option>
				<option value="banana">Banana</option>
				<option value="cherry">Cherry</option>
			</select>
		</ListItem>
		<ListItem title="Toppings" smartSelect smartSelectParams={{ openIn: 'popover' }}>
			<select name="toppings" multiple>
				<option value="nuts" selected>Nuts</option>
				<option value="honey">Honey</option>
				<option value="berries" selected>Berries</option>
			</select>
		</ListItem>
	</List>
</F7App>
