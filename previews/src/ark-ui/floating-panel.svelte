<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/floating-panel
-->
<script lang="ts">
	import { FloatingPanel } from '@ark-ui/svelte/floating-panel'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<FloatingPanel.Root defaultSize={{ width: 280, height: 180 }}>
	<FloatingPanel.Trigger>Open panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner>
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>Notes</FloatingPanel.Title>
						<FloatingPanel.Control>
							<FloatingPanel.StageTrigger stage="minimized">Minimize</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="default">Restore</FloatingPanel.StageTrigger>
							<FloatingPanel.CloseTrigger>Close</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</FloatingPanel.Header>
				</FloatingPanel.DragTrigger>
				<FloatingPanel.Body>Drag the header to move this panel; drag its edge to resize.</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger axis="se" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel.Root>
