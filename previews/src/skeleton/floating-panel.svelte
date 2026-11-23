<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The trigger uses Skeleton's own `btn` classes; the panel controls use text glyphs.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/floating-panel
-->
<script lang="ts">
	import './styles.css'
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<FloatingPanel defaultSize={{ width: 320, height: 200 }}>
	<FloatingPanel.Trigger class="btn preset-filled">Open panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner>
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>Notes</FloatingPanel.Title>
						<FloatingPanel.Control>
							<FloatingPanel.StageTrigger stage="minimized" aria-label="Minimize">–</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="default" aria-label="Restore">□</FloatingPanel.StageTrigger>
							<FloatingPanel.CloseTrigger aria-label="Close">×</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</FloatingPanel.Header>
				</FloatingPanel.DragTrigger>
				<FloatingPanel.Body>
					<p>Drag the header to move this panel, or resize it from the corner.</p>
				</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger axis="se" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
