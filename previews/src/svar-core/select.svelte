<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/richselect/willow
-->
<script lang="ts">
	import { Field, RichSelect, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const options = [
		{ id: 1, label: 'Apple' },
		{ id: 2, label: 'Banana' },
		{ id: 3, label: 'Cherry' },
	]
	let value = $state(1)
</script>

<Theme>
	<Field label="Fruit">
		<RichSelect {options} bind:value />
	</Field>
</Theme>
