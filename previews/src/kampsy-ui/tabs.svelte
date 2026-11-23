<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/tabs
-->
<script lang="ts">
	import './styles.css'
	import { Tabs } from 'kampsy-ui'

	let selected = $state('overview')
</script>

<Tabs
	bind:selected
	tabs={[
		{ title: 'Overview', value: 'overview' },
		{ title: 'Deployments', value: 'deployments' },
		{ title: 'Settings', value: 'settings', disabled: true, tooltip: 'Owners only' }
	]}
/>
<p>Selected: {selected}</p>
