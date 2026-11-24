<!--
  PaneForge is unstyled: it sizes panes and handles dragging, nothing else. The group gets an
  inline height only because panes split the space of their container.
  Docs: https://paneforge.com/docs
-->
<script lang="ts">
	import { Pane, PaneGroup, PaneResizer } from 'paneforge'
</script>

<PaneGroup direction="horizontal" style="height: 160px">
	<Pane defaultSize={40}>Left pane</Pane>
	<PaneResizer>⋮</PaneResizer>
	<Pane defaultSize={60}>Right pane</Pane>
</PaneGroup>
