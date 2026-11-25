<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/sidebar
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Sidebar, SidebarItem } from 'yesvelte'
</script>

<Sidebar>
	<SidebarItem title="Overview" active />
	<SidebarItem title="Projects">
		<SidebarItem title="Active" />
		<SidebarItem title="Archived" />
	</SidebarItem>
	<SidebarItem title="Settings" />
</Sidebar>
