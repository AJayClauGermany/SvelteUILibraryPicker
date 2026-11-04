<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Tabs only renders the tab bar; the panel below is plain text of ours.
  Docs: https://kendell.dev/m3-svelte/#tabs-demo
-->
<script lang="ts">
	import './styles.css'
	import { Tabs } from 'm3-svelte'

	const items = [
		{ name: 'Overview', value: 'overview' },
		{ name: 'Details', value: 'details' },
		{ name: 'History', value: 'history' },
	]
	let tab = $state('overview')
</script>

<Tabs {items} bind:tab />
<p>{items.find(i => i.value === tab)?.name} panel.</p>
