<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Range
-->
<script lang="ts">
	import { Range } from '@perfectthings/ui'
</script>

<Range label="Volume" min={0} max={10} value={6} />
