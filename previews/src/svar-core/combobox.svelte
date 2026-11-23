<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/combo/willow
-->
<script lang="ts">
	import { Combo, Field, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const options = [
		{ id: 'de', label: 'Germany' },
		{ id: 'fr', label: 'France' },
		{ id: 'it', label: 'Italy' },
		{ id: 'es', label: 'Spain' },
	]
	let value = $state('')
</script>

<Theme>
	<Field label="Country">
		<Combo {options} bind:value placeholder="Type to filter" clear />
	</Field>
</Theme>
