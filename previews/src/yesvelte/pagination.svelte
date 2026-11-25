<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/pagination
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Pagination } from 'yesvelte'
</script>

<Pagination from={1} to={5} value={2} />
