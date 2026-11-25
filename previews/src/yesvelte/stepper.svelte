<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/steps
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { StepItem, Steps } from 'yesvelte'
</script>

<Steps>
	<StepItem>Cart</StepItem>
	<StepItem active>Shipping</StepItem>
	<StepItem>Payment</StepItem>
	<StepItem>Done</StepItem>
</Steps>
