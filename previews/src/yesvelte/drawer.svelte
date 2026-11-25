<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/offcanvas
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'yesvelte'

	let show = $state(true)
</script>

<Button color="primary" onclick={() => (show = true)}>Open panel</Button>

<Offcanvas bind:show placement="start" autoClose backdrop>
	<OffcanvasHeader title="Filters" />
	<OffcanvasBody>Narrow the list by status, owner or date.</OffcanvasBody>
</Offcanvas>
