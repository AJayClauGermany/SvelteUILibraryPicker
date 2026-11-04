<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/tabs
-->
<script lang="ts">
	import { Tabs } from 'melt/builders'

	const panels = [
		{ id: 'overview', label: 'Overview', body: 'Overview panel.' },
		{ id: 'details', label: 'Details', body: 'Details panel.' },
		{ id: 'history', label: 'History', body: 'History panel.' },
	]

	const tabs = new Tabs<string>({ value: 'overview' })
</script>

<div {...tabs.triggerList}>
	{#each panels as panel (panel.id)}
		<button {...tabs.getTrigger(panel.id)}>{panel.label}</button>
	{/each}
</div>

{#each panels as panel (panel.id)}
	<div {...tabs.getContent(panel.id)}>{panel.body}</div>
{/each}
