<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#InputRating
-->
<script lang="ts">
	import { InputRating } from '@perfectthings/ui'
</script>

<InputRating label="Your rating" value={3} />
