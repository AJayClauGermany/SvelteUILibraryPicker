<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Without styles the resize handle is an empty button between the two panels.
  Docs: https://ark-ui.com/svelte/docs/components/splitter
-->
<script lang="ts">
	import { Splitter } from '@ark-ui/svelte/splitter'

	const panels = [{ id: 'left' }, { id: 'right' }]
</script>

<Splitter.Root {panels} defaultSize={[40, 60]}>
	<Splitter.Panel id="left">Left panel</Splitter.Panel>
	<Splitter.ResizeTrigger id="left:right" aria-label="Resize" />
	<Splitter.Panel id="right">Right panel</Splitter.Panel>
</Splitter.Root>
