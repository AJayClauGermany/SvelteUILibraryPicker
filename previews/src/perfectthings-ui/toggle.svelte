<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#PushButton
-->
<script lang="ts">
	import { PushButton } from '@perfectthings/ui'

	let pinned = $state(true)
</script>

<PushButton bind:pressed={pinned}>{pinned ? 'Pinned' : 'Pin'}</PushButton>
<PushButton icon="star" title="Favourite" />
