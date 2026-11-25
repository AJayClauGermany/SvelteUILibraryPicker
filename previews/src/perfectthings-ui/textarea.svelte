<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Textarea
-->
<script lang="ts">
	import { Textarea } from '@perfectthings/ui'
</script>

<Textarea label="Notes" placeholder="Grows as you type" autogrow />
