<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Tooltip
-->
<script lang="ts">
	import { Button, Tooltip } from '@perfectthings/ui'
</script>

<Button id="copy-button">Hover me</Button>

<Tooltip target="copy-button" position="bottom" shortcut="cmd+c">Copy to clipboard</Tooltip>
