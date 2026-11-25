<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Shown open with static positioning and no backdrop, as in the docs' static positioning example.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/sidebar/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Sidebar, SidebarGroup, SidebarItem } from 'svelte-5-ui-lib'
</script>

<Sidebar isOpen position="static" backdrop={false} activateClickOutside={false} activeUrl="#dashboard" ariaLabel="Main">
	<SidebarGroup>
		<SidebarItem label="Dashboard" href="#dashboard" />
		<SidebarItem label="Inbox" href="#inbox" />
		<SidebarItem label="Projects" href="#projects" />
	</SidebarGroup>
	<SidebarGroup border>
		<SidebarItem label="Settings" href="#settings" />
		<SidebarItem label="Help" href="#help" />
	</SidebarGroup>
</Sidebar>
