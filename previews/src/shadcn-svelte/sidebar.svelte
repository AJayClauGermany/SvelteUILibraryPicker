<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  The preview frame is narrower than its mobile breakpoint, so the sidebar is shown non-collapsible.
  Docs: https://shadcn-svelte.com/docs/components/sidebar
-->
<script lang="ts">
	import './styles.css'
	import HouseIcon from '@lucide/svelte/icons/house'
	import InboxIcon from '@lucide/svelte/icons/inbox'
	import SettingsIcon from '@lucide/svelte/icons/settings'
	import * as Sidebar from './ui/sidebar/index.js'

	const items = [
		{ title: 'Home', icon: HouseIcon },
		{ title: 'Inbox', icon: InboxIcon },
		{ title: 'Settings', icon: SettingsIcon }
	]
</script>

<Sidebar.Provider>
	<Sidebar.Root collapsible="none">
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Workspace</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={item.title === 'Home'}>
									<item.icon />
									<span>{item.title}</span>
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
	</Sidebar.Root>
</Sidebar.Provider>
