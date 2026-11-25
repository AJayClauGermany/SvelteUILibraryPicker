<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Docs: https://melt-ui.com/docs/builders/tabs
-->
<script lang="ts">
	import { createTabs } from '@melt-ui/svelte'

	const panels = [
		{ id: 'account', title: 'Account', body: 'Account settings go here.' },
		{ id: 'password', title: 'Password', body: 'Password settings go here.' },
		{ id: 'billing', title: 'Billing', body: 'Billing settings go here.' },
	]

	const {
		elements: { root, list, trigger, content },
	} = createTabs({ defaultValue: 'account' })
</script>

<div {...$root} use:root>
	<div {...$list} use:list aria-label="Settings">
		{#each panels as panel (panel.id)}
			<button {...$trigger(panel.id)} use:trigger>{panel.title}</button>
		{/each}
	</div>
	{#each panels as panel (panel.id)}
		<div {...$content(panel.id)} use:content>{panel.body}</div>
	{/each}
</div>
