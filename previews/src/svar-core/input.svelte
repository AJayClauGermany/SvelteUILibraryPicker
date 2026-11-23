<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/inputs/willow
-->
<script lang="ts">
	import { Field, Text, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	let name = $state('')
</script>

<Theme>
	<Field label="Name">
		<Text bind:value={name} placeholder="Your name" />
	</Field>
	<Field label="Email" error>
		<Text value="not-an-email" error />
	</Field>
	<Field label="Disabled">
		<Text value="Read only" disabled />
	</Field>
</Theme>
