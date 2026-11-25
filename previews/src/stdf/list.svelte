<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=list&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { List } from 'stdf'

	const data = [
		{ id: 1, name: 'Inbox' },
		{ id: 2, name: 'Drafts' },
		{ id: 3, name: 'Archive' },
	]
</script>

<List {data} arrow divider>
	{#snippet itemChild(item)}{item.name}{/snippet}
</List>
