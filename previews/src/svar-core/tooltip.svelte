<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/tooltips/willow
-->
<script lang="ts">
	import { Button, Tooltip, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)
</script>

<Theme>
	<!-- Tooltip shows the tooltip text of whichever control inside it is hovered -->
	<Tooltip>
		<Button tooltip="Save your changes">Save</Button>
		<Button tooltip="Discard all edits">Reset</Button>
	</Tooltip>
</Theme>
