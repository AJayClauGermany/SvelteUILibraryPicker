<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#InputDate
-->
<script lang="ts">
	import { InputDate } from '@perfectthings/ui'
</script>

<InputDate label="Start date" value="2026-03-14" showOnFocus />
