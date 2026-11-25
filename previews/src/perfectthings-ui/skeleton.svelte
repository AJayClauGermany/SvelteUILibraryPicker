<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Skeleton
-->
<script lang="ts">
	import { SkeletonCircle, SkeletonHStack, SkeletonText, SkeletonVStack } from '@perfectthings/ui'
</script>

<SkeletonHStack>
	<SkeletonCircle size={48} />
	<SkeletonVStack>
		<SkeletonText size={2} />
	</SkeletonVStack>
</SkeletonHStack>
