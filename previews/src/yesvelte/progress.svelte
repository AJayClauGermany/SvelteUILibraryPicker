<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/progress
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Progress, ProgressBar } from 'yesvelte'
</script>

<Progress>
	<ProgressBar value={40} />
</Progress>
<br />
<Progress>
	<ProgressBar color="success" value={70} striped="animated" />
</Progress>
