<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/navbar
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Navbar, NavbarItem } from 'yesvelte'
</script>

<Navbar>
	<NavbarItem title="Dashboard" active />
	<NavbarItem title="Projects" />
	<NavbarItem title="Reports" />
	<NavbarItem title="Archive" disabled />
</Navbar>
