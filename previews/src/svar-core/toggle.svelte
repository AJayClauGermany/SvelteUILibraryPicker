<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/twostate/willow
-->
<script lang="ts">
	import { TwoState, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)
</script>

<Theme>
	<TwoState text="Bold" />
	<TwoState text="Italic" value={true} />
	<TwoState type="primary" text="Follow" textActive="Following" />
</Theme>
