<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/button-group
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, ButtonGroup } from 'yesvelte'
</script>

<ButtonGroup>
	<Button>Day</Button>
	<Button active>Week</Button>
	<Button>Month</Button>
</ButtonGroup>
