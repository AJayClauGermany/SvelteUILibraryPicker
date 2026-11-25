<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/checkbox
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Checkbox } from 'yesvelte'
</script>

<Checkbox label="Email me about updates" checked />
<Checkbox label="Remember this device" />
<Checkbox label="Unavailable option" disabled />
