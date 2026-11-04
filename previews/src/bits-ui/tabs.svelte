<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/tabs
-->
<script lang="ts">
	import { Tabs } from 'bits-ui'

	const panels = [
		{ value: 'overview', label: 'Overview', body: 'Overview panel.' },
		{ value: 'details', label: 'Details', body: 'Details panel.' },
		{ value: 'history', label: 'History', body: 'History panel.' },
	]
</script>

<Tabs.Root value="overview">
	<Tabs.List>
		{#each panels as panel (panel.value)}
			<Tabs.Trigger value={panel.value}>{panel.label}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each panels as panel (panel.value)}
		<Tabs.Content value={panel.value}>{panel.body}</Tabs.Content>
	{/each}
</Tabs.Root>
