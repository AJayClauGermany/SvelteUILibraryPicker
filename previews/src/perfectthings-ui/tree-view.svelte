<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Tree
-->
<script lang="ts">
	import { Tree } from '@perfectthings/ui'

	const items = [
		{ id: 1, name: 'src', items: [
			{ id: 11, name: 'App.svelte' },
			{ id: 12, name: 'lib', items: [{ id: 121, name: 'utils.ts' }] },
		] },
		{ id: 2, name: 'README.md' },
	]
</script>

<Tree {items} />
