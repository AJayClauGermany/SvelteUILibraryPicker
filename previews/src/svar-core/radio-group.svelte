<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/radio/willow
-->
<script lang="ts">
	import { RadioButtonGroup, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const options = [
		{ id: 'email', label: 'Email' },
		{ id: 'phone', label: 'Phone' },
		{ id: 'post', label: 'Post' },
	]
	let value = $state('email')
</script>

<Theme>
	<RadioButtonGroup {options} bind:value />
</Theme>
