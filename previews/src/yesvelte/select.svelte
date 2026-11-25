<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/select
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Select } from 'yesvelte'
</script>

<Select items={['Apple', 'Banana', 'Cherry', 'Pear']} placeholder="Choose a fruit" />
