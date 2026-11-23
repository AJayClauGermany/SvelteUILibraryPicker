<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/icon/willow
-->
<script lang="ts">
	import { Icon, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)
</script>

<Theme>
	<!-- icons are class names from the wxi icon font that the theme loads -->
	<Icon css="wxi-search" title="Search" />
	<Icon css="wxi-edit" title="Edit" />
	<Icon css="wxi-delete" title="Delete" />
	<Icon css="wxi-calendar" title="Calendar" />
	<Icon css="wxi-star" title="Star" />
</Theme>
