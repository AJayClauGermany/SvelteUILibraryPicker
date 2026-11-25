<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Combobox
-->
<script lang="ts">
	import { Combobox } from '@perfectthings/ui'

	const cities = [
		{ id: 1, name: 'Lisbon' },
		{ id: 2, name: 'Oslo' },
		{ id: 3, name: 'Seoul' },
		{ id: 4, name: 'Toronto' },
	]
</script>

<Combobox label="City" placeholder="Type or pick a city" items={cities} allowNew />
