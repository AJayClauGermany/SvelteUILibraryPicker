<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/range/willow
-->
<script lang="ts">
	import { RangeCalendar, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const today = new Date()
	let start = $state(today)
	let end = $state(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6))
</script>

<Theme>
	<RangeCalendar bind:start bind:end />
</Theme>
