<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/popover
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, Popover, PopoverBody, PopoverHeader } from 'yesvelte'
</script>

<Button>Show details</Button>
<Popover trigger="click" arrow>
	<PopoverHeader>Details</PopoverHeader>
	<PopoverBody>Popovers attach to the element just before them.</PopoverBody>
</Popover>
