<!--
  SVAR Gantt styles itself through a theme wrapper; we use its default Willow theme and its
  WillowDark theme in dark mode (both exported by the package). No styles of ours: the chart fills
  its parent, so the parent only gets a height. Sample tasks are inline. In frames 650px wide or
  less the chart's own compact mode shows one panel at a time (its arrow switches grid/timeline).
  Docs: https://docs.svar.dev/svelte/gantt/getting-started/quickstart/
-->
<script lang="ts">
	import { Gantt, Willow, WillowDark } from '@svar-ui/svelte-gantt'
	import { theme } from '../../theme.svelte.ts'

	const Theme = $derived(theme.current === 'dark' ? WillowDark : Willow)

	const tasks = [
		{ id: 1, text: 'Garden makeover', start: new Date(2026, 4, 4), end: new Date(2026, 4, 16), type: 'summary', parent: 0, open: true },
		{ id: 2, text: 'Clear beds', start: new Date(2026, 4, 4), end: new Date(2026, 4, 7), progress: 100, parent: 1 },
		{ id: 3, text: 'Plant seedlings', start: new Date(2026, 4, 7), end: new Date(2026, 4, 13), progress: 40, parent: 1 },
		{ id: 4, text: 'First harvest check', start: new Date(2026, 4, 15), type: 'milestone', parent: 1 },
	]
	const links = [
		{ id: 1, source: 2, target: 3, type: 'e2s' },
		{ id: 2, source: 3, target: 4, type: 'e2s' },
	]
</script>

<div style="height: 240px">
	<Theme>
		<Gantt {tasks} {links} />
	</Theme>
</div>
