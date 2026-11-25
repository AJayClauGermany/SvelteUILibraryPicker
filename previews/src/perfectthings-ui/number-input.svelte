<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#InputNumber
-->
<script lang="ts">
	import { InputNumber } from '@perfectthings/ui'
</script>

<InputNumber label="Quantity" value={3} min={0} max={10} />
