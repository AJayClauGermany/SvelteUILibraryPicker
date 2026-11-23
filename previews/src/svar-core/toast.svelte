<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/messages/willow
-->
<script lang="ts">
	import { getContext } from 'svelte'
	import { Button, Globals, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	type Helpers = { showNotice: (msg: { text: string; type?: string; expire?: number }) => void }
</script>

<Theme>
	<Globals>
		<!-- showNotice comes from the context that Globals sets for its children -->
		{@const { showNotice } = getContext<Helpers>('wx-helpers')}
		<Button type="primary" onclick={() => showNotice({ text: 'Changes saved', type: 'success' })}>
			Show notice
		</Button>
		<Button onclick={() => showNotice({ text: 'A plain notice' })}>Plain notice</Button>
	</Globals>
</Theme>
