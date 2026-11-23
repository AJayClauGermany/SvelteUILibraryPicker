<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Only the rows in view are rendered while you scroll.
  Docs: https://flowbite-svelte.com/docs/extend/virtual-list
-->
<script lang="ts">
	import './styles.css'
	import { VirtualList } from 'flowbite-svelte'

	const rows = Array.from({ length: 10000 }, (_, i) => `Row ${i + 1}`)
</script>

<VirtualList items={rows} minItemHeight={24} height={300}>
	{#snippet children(row)}
		<div>{row}</div>
	{/snippet}
</VirtualList>
