<!--
  SVAR Core styles its components through a theme wrapper; we use its default Willow theme,
  exactly as its getting-started guide sets it up, and its WillowDark theme in dark mode
  (both are exported by the package; see previews/theme.svelte.ts). No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/avatar/willow
-->
<script lang="ts">
	import { Avatar, Willow, WillowDark } from '@svar-ui/svelte-core'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const team = [
		{ id: 1, name: 'Ada Lovelace', color: '#65d3b3' },
		{ id: 2, name: 'Alan Turing', color: '#7b8cf0' },
		{ id: 3, name: 'Grace Hopper' },
		{ id: 4, name: 'Linus Pauling', color: '#f0a35e' },
		{ id: 5, name: 'Mary Shelley' },
	]
</script>

<Theme>
	<Avatar value={team[0]} />
	<Avatar value={team[1]} size={48} />
	<Avatar value={team} limit={4} />
</Theme>
