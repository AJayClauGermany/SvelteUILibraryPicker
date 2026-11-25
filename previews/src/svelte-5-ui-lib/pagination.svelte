<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/pagination/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Pagination } from 'svelte-5-ui-lib'

	const pages = [
		{ name: '1', href: '#page-1' },
		{ name: '2', href: '#page-2', active: true },
		{ name: '3', href: '#page-3' },
		{ name: '4', href: '#page-4' },
	]
</script>

<Pagination {pages} previous={() => {}} next={() => {}} />
