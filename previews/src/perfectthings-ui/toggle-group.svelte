<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#ButtonToggle
-->
<script lang="ts">
	import { ButtonToggle } from '@perfectthings/ui'
</script>

<ButtonToggle label="View" items={['Day', 'Week', 'Month']} value="Week" />
