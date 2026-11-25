<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Pagination
-->
<script lang="ts">
	import './styles.css'
	import { Pagination } from 'spaper'

	let current = $state(3)
</script>

<Pagination total={60} pageSize={10} bind:current />
