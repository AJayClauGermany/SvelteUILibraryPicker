<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/slider/willow
-->
<script lang="ts">
	import { Slider, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	let volume = $state(40)
</script>

<Theme>
	<Slider label="Volume: {volume}" bind:value={volume} />
	<Slider label="Disabled" value={70} disabled />
</Theme>
