<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/clipboard
-->
<script lang="ts">
	import { Clipboard } from '@ark-ui/svelte/clipboard'
</script>

<Clipboard.Root value="https://example.com/invite/abc123">
	<Clipboard.Label>Invite link</Clipboard.Label>
	<Clipboard.Control>
		<Clipboard.Input />
		<Clipboard.Trigger>
			<Clipboard.Indicator>
				{#snippet copied()}Copied{/snippet}
				Copy
			</Clipboard.Indicator>
		</Clipboard.Trigger>
	</Clipboard.Control>
</Clipboard.Root>
