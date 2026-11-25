<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Click the field to open the calendar. It starts with a value: in 9.3.0 a datepicker ListInput
  without one throws when Svelte re-runs its value effect.
  Docs: https://framework7.io/svelte/calendar.html
-->
<script lang="ts">
	import { List, ListInput } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List>
		<ListInput label="Delivery date" type="datepicker" value={[new Date()]} readonly />
	</List>
</F7App>
