<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/autocomplete
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Autocomplete } from 'yesvelte'
</script>

<Autocomplete items={['Lisbon', 'London', 'Lyon', 'Madrid', 'Milan']} placeholder="Type a city" />
