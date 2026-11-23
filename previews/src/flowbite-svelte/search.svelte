<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/search-input
-->
<script lang="ts">
	import './styles.css'
	import { Search } from 'flowbite-svelte'

	let query = $state('')
</script>

<Search bind:value={query} placeholder="Search projects" clearable />
