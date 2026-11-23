<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/multicombo/willow
-->
<script lang="ts">
	import { MultiCombo, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const options = [
		{ id: 1, label: 'Svelte' },
		{ id: 2, label: 'TypeScript' },
		{ id: 3, label: 'Vite' },
		{ id: 4, label: 'Tailwind' },
	]
	let value = $state([1, 3])
</script>

<Theme>
	<MultiCombo {options} bind:value placeholder="Add a tag" />
</Theme>
