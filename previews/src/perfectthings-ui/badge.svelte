<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Tag
-->
<script lang="ts">
	import { Tag } from '@perfectthings/ui'
</script>

<Tag>Draft</Tag>
<Tag color="info">Review</Tag>
<Tag color="success" icon="check">Merged</Tag>
<Tag color="danger" round>Blocked</Tag>
