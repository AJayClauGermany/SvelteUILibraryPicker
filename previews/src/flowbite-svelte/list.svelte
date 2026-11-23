<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The list group is called Listgroup in Flowbite.
  Docs: https://flowbite-svelte.com/docs/components/list-group
-->
<script lang="ts">
	import './styles.css'
	import { Listgroup, ListgroupItem } from 'flowbite-svelte'
</script>

<p>Plain items:</p>
<Listgroup items={['Profile', 'Settings', 'Messages', 'Downloads']} />

<p>Clickable items:</p>
<Listgroup active>
	<ListgroupItem current>Inbox</ListgroupItem>
	<ListgroupItem>Starred</ListgroupItem>
	<ListgroupItem disabled>Archived</ListgroupItem>
</Listgroup>
