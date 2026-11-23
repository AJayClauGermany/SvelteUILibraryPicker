<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/sidearea/willow
-->
<script lang="ts">
	import { Button, SideArea, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	let open = $state(true)
</script>

<Theme>
	<Button type="primary" onclick={() => (open = true)}>Open side area</Button>

	{#if open}
		<SideArea oncancel={() => (open = false)}>
			<p>Settings panel</p>
			<Button onclick={() => (open = false)}>Close</Button>
		</SideArea>
	{/if}
</Theme>
