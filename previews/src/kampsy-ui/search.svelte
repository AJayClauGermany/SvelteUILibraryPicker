<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/search-input
-->
<script lang="ts">
	import './styles.css'
	import { SearchInput } from 'kampsy-ui'

	let query = $state('')
</script>

<SearchInput aria-label="Search" bind:value={query} placeholder="Search projects..." />
<SearchInput aria-label="Search" placeholder="Loading..." loading />
