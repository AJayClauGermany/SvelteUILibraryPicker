<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#ComboboxMultiselect
-->
<script lang="ts">
	import { Combobox } from '@perfectthings/ui'

	const labels = [
		{ id: 1, name: 'Bug' },
		{ id: 2, name: 'Docs' },
		{ id: 3, name: 'Feature' },
		{ id: 4, name: 'Question' },
	]
	let value = $state([labels[0], labels[2]])
</script>

<Combobox label="Labels" items={labels} multiselect bind:value />
