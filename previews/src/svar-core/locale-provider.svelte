<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/locales/willow
-->
<script lang="ts">
	import { Calendar, DatePicker, Locale, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	// Partial overrides on top of the built-in English words:
	// weeks start on Monday and dates use an ISO-style format.
	const words = {
		calendar: { weekStart: 1, today: 'Go to today' },
		formats: { dateFormat: '%Y-%m-%d' },
	}

	let value = $state(new Date())
</script>

<Theme>
	<Locale {words}>
		<DatePicker bind:value />
		<Calendar bind:value />
	</Locale>
</Theme>
