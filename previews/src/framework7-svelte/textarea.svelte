<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/inputs.html#input-properties
-->
<script lang="ts">
	import { List, ListInput } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List>
		<ListInput label="Message" type="textarea" placeholder="Write your message" />
		<ListInput label="Notes" type="textarea" placeholder="This one grows as you type" resizable />
	</List>
</F7App>
