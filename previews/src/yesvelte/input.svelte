<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/input
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Input } from 'yesvelte'
</script>

<Input placeholder="Full name" />
<Input placeholder="Phone" mask="(999) 999-9999" />
<Input value="Not valid" state="invalid" />
