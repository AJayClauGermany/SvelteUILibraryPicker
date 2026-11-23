<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/popover
-->
<script lang="ts">
	import { Popover } from 'bits-ui'
</script>

<Popover.Root>
	<Popover.Trigger>Share</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content sideOffset={8}>
			<p>Anyone with the link can view this page.</p>
			<Popover.Close>Close</Popover.Close>
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
