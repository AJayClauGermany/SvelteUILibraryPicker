<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/popup/willow
-->
<script lang="ts">
	import { Button, Field, Popup, Slider, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	let anchor = $state<HTMLElement>()
	let open = $state(false)
	let volume = $state(40)
</script>

<Theme>
	<div bind:this={anchor}>
		<Button type="primary" onclick={() => (open = true)}>Volume</Button>
	</div>
	<p>The popup opens below the button; click outside it to close.</p>

	{#if open}
		<Popup parent={anchor} at="bottom-start" oncancel={() => (open = false)}>
			<Field label="Volume">
				<Slider bind:value={volume} />
			</Field>
		</Popup>
	{/if}
</Theme>
