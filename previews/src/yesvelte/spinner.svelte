<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/spinner
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Spinner } from 'yesvelte'
</script>

<Spinner />
<Spinner color="primary" />
<Spinner color="success" animate="grow" />
