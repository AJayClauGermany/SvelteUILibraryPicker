<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/sidebar
  The preview frame is narrower than its 800px mobile breakpoint, so this uses collapsible="none".
-->
<script lang="ts">
	import './styles.css'
	import FileText from '@lucide/svelte/icons/file-text'
	import House from '@lucide/svelte/icons/house'
	import Settings from '@lucide/svelte/icons/settings'
	import {
		Sidebar,
		SidebarContent,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarInset,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem,
		SidebarProvider,
	} from './ui/sidebar/index.ts'

	const items = [
		{ title: 'Home', icon: House },
		{ title: 'Documents', icon: FileText },
		{ title: 'Settings', icon: Settings },
	]
	let active = $state('Home')
</script>

<SidebarProvider>
	<Sidebar collapsible="none">
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Workspace</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{#each items as item (item.title)}
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={active === item.title}
									onclick={() => (active = item.title)}
								>
									<item.icon />
									<span>{item.title}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						{/each}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<p class="p-4 text-sm">{active}</p>
	</SidebarInset>
</SidebarProvider>
