<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Shown always open with static positioning, as in the docs' static example.
  Docs: https://flowbite-svelte.com/docs/components/sidebar
-->
<script lang="ts">
	import './styles.css'
	import { Sidebar, SidebarDropdownWrapper, SidebarGroup, SidebarItem } from 'flowbite-svelte'
</script>

<Sidebar alwaysOpen position="static" backdrop={false} activeUrl="#dashboard" ariaLabel="Main">
	<SidebarGroup>
		<SidebarItem label="Dashboard" href="#dashboard" />
		<SidebarItem label="Inbox" href="#inbox" />
		<SidebarDropdownWrapper label="Projects">
			<SidebarItem label="Website" href="#website" />
			<SidebarItem label="Mobile app" href="#mobile" />
		</SidebarDropdownWrapper>
	</SidebarGroup>
	<SidebarGroup border>
		<SidebarItem label="Settings" href="#settings" />
		<SidebarItem label="Help" href="#help" />
	</SidebarGroup>
</Sidebar>
