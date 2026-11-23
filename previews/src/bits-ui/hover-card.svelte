<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/link-preview
-->
<script lang="ts">
	import { LinkPreview } from 'bits-ui'
</script>

<LinkPreview.Root>
	<LinkPreview.Trigger href="https://github.com/huntabyte/bits-ui" target="_blank" rel="noreferrer">
		bits-ui on GitHub
	</LinkPreview.Trigger>
	<LinkPreview.Portal>
		<LinkPreview.Content sideOffset={8}>
			<p>Headless components for Svelte.</p>
		</LinkPreview.Content>
	</LinkPreview.Portal>
</LinkPreview.Root>
