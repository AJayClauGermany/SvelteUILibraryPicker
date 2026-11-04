<!--
  SVAR Core styles its components through a theme wrapper; we use the default Willow theme,
  exactly as its getting-started guide sets it up. No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/tabs/willow
-->
<script lang="ts">
	import { Tabs, Willow } from '@svar-ui/svelte-core'

	const options = [
		{ id: 'first', label: 'First' },
		{ id: 'second', label: 'Second' },
		{ id: 'third', label: 'Third' },
	]
	let value = $state('first')
</script>

<Willow>
	<Tabs {options} bind:value />
	<p>Content for the {value} tab.</p>
</Willow>
