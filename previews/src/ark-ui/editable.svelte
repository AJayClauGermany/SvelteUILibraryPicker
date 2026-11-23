<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/editable
-->
<script lang="ts">
	import { Editable } from '@ark-ui/svelte/editable'
</script>

<Editable.Root defaultValue="My project" activationMode="dblclick">
	<Editable.Label>Project name (double-click to edit)</Editable.Label>
	<Editable.Area>
		<Editable.Input />
		<Editable.Preview />
	</Editable.Area>
	<Editable.Context>
		{#snippet render(editable)}
			<Editable.Control>
				{#if editable().editing}
					<Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
					<Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
				{:else}
					<Editable.EditTrigger>Edit</Editable.EditTrigger>
				{/if}
			</Editable.Control>
		{/snippet}
	</Editable.Context>
</Editable.Root>
