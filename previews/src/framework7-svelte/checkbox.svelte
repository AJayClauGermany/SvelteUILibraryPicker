<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/checkbox.html
-->
<script lang="ts">
	import { Block, Checkbox, List, ListItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Checkbox name="standalone" checked /> Standalone checkbox
	</Block>
	<List>
		<ListItem checkbox name="updates" value="email" title="Email updates" checked />
		<ListItem checkbox name="updates" value="sms" title="Text messages" />
		<ListItem checkbox name="updates" value="push" title="Push notifications" disabled />
	</List>
</F7App>
