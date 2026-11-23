<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Text inside uses the gray text classes from the docs' default example.
  Docs: https://flowbite-svelte.com/docs/components/drawer
-->
<script lang="ts">
	import './styles.css'
	import { Button, Drawer } from 'flowbite-svelte'

	let open = $state(false)
</script>

<Button onclick={() => (open = true)}>Open drawer</Button>

<Drawer bind:open aria-labelledby="drawer-label">
	<h5 id="drawer-label" class="mb-4 font-semibold text-gray-500 dark:text-gray-400">Drawer title</h5>
	<p class="text-sm text-gray-500 dark:text-gray-400">Some content inside the drawer.</p>
</Drawer>
