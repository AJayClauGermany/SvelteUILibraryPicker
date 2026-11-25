<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/switch
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Switch } from 'yesvelte'
</script>

<Switch label="Wi-Fi" checked />
<Switch label="Bluetooth" />
<Switch label="Airplane mode" disabled />
