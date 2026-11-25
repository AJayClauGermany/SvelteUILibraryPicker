<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/inputs.html
-->
<script lang="ts">
	import { List, ListInput } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List>
		<ListInput label="Username" type="text" placeholder="Pick a username" clearButton />
		<ListInput label="Password" type="password" placeholder="At least 8 characters" />
		<ListInput label="Website" type="url" floatingLabel />
	</List>
</F7App>
