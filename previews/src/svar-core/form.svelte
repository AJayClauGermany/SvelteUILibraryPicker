<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/field/willow
-->
<script lang="ts">
	import { Button, Field, Switch, Text, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	let name = $state('')
	let email = $state('')
	let news = $state(true)
</script>

<Theme>
	<Field label="Name" required>
		<Text bind:value={name} placeholder="Your name" />
	</Field>
	<Field label="Email" error={email !== '' && !email.includes('@')}>
		<Text bind:value={email} placeholder="you@example.com" />
	</Field>
	<Field label="Newsletter" type="switch">
		<Switch bind:value={news} />
	</Field>
	<Button type="primary">Submit</Button>
</Theme>
