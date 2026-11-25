<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/popover.html
-->
<script lang="ts">
	import { Block, Button, List, ListItem, Popover } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill popoverOpen=".preview-popover">Open popover</Button>
	</Block>
	{#snippet modals()}
		<Popover class="preview-popover">
			<List>
				<ListItem link title="Profile" popoverClose />
				<ListItem link title="Settings" popoverClose />
				<ListItem link title="Sign out" popoverClose />
			</List>
		</Popover>
	{/snippet}
</F7App>
