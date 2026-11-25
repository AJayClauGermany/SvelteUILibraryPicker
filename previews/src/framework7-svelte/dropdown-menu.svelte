<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/action-sheet.html
-->
<script lang="ts">
	import { Actions, ActionsButton, ActionsGroup, ActionsLabel, Block, Button } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill actionsOpen="#preview-actions">Open action sheet</Button>
	</Block>
	{#snippet modals()}
		<Actions id="preview-actions">
			<ActionsGroup>
				<ActionsLabel>File options</ActionsLabel>
				<ActionsButton>Rename</ActionsButton>
				<ActionsButton>Duplicate</ActionsButton>
				<ActionsButton color="red">Delete</ActionsButton>
			</ActionsGroup>
			<ActionsGroup>
				<ActionsButton strong>Cancel</ActionsButton>
			</ActionsGroup>
		</Actions>
	{/snippet}
</F7App>
