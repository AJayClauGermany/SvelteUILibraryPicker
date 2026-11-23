<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/messages/willow
-->
<script lang="ts">
	import { Button, Modal, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	let open = $state(false)
	let answer = $state('')
	const reply = (text: string) => {
		answer = text
		open = false
	}
</script>

<Theme>
	<Button type="danger" onclick={() => (open = true)}>Delete account</Button>
	{#if answer}<p>{answer}</p>{/if}

	{#if open}
		<Modal
			title="Delete your account?"
			onconfirm={() => reply('Confirmed')}
			oncancel={() => reply('Cancelled')}
		>
			All of your data will be removed permanently.
		</Modal>
	{/if}
</Theme>
