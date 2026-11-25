<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/alert
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Alert } from 'yesvelte'
</script>

<Alert color="success" title="Saved">Your changes are live.</Alert>
<Alert color="warning" title="Storage almost full" dismissible>Free up space to keep syncing.</Alert>
