<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/divider
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Divider } from 'yesvelte'
</script>

<p>Profile details</p>
<Divider />
<p>Security settings</p>
<Divider>or</Divider>
<p>Delete account</p>
