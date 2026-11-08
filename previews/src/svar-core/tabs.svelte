<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/tabs/willow
-->
<script lang="ts">
	import { Tabs, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const options = [
		{ id: 'first', label: 'First' },
		{ id: 'second', label: 'Second' },
		{ id: 'third', label: 'Third' },
	]
	let value = $state('first')
</script>

<Theme>
	<Tabs {options} bind:value />
	<p>Content for the {value} tab.</p>
</Theme>
