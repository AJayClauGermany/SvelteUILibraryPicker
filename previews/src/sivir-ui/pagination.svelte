<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/pagination
-->
<script lang="ts">
	import './styles.css'
	import { Pagination } from '@sivir-ui/svelte/components/pagination'

	let page = $state(4)
</script>

<Pagination bind:page total={12} />
