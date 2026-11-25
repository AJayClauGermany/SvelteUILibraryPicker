<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/avatar
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Avatar, AvatarList } from 'yesvelte'
</script>

<Avatar>JD</Avatar>
<Avatar color="primary">AK</Avatar>
<Avatar color="success" shape="circle" size="lg">MR</Avatar>

<AvatarList stacked>
	<Avatar shape="circle">AB</Avatar>
	<Avatar shape="circle">CD</Avatar>
	<Avatar shape="circle">EF</Avatar>
</AvatarList>
