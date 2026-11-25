<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Radio
-->
<script lang="ts">
	import { Radio } from '@perfectthings/ui'

	const sizes = [
		{ name: 'Small', value: 's' },
		{ name: 'Medium', value: 'm' },
		{ name: 'Large', value: 'l' },
	]
</script>

<Radio label="Size" name="size" items={sizes} value="m" />
