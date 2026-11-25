<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Checkbox
-->
<script lang="ts">
	import { Checkbox } from '@perfectthings/ui'
</script>

<Checkbox label="Send me updates" checked />
<Checkbox label="Select all" indeterminate />
<Checkbox label="Unavailable" disabled />
