<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Select
-->
<script lang="ts">
	import { Select } from '@perfectthings/ui'

	const fruits = [
		{ id: 'apple', name: 'Apple' },
		{ id: 'pear', name: 'Pear' },
		{ id: 'plum', name: 'Plum' },
	]
</script>

<Select label="Fruit" items={fruits} value="pear" />
