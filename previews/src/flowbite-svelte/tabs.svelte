<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/tabs
-->
<script lang="ts">
	import './styles.css'
	import { TabItem, Tabs } from 'flowbite-svelte'
</script>

<Tabs>
	<TabItem open title="Overview">
		<p>Overview content.</p>
	</TabItem>
	<TabItem title="Details">
		<p>Details content.</p>
	</TabItem>
	<TabItem title="Settings">
		<p>Settings content.</p>
	</TabItem>
</Tabs>
