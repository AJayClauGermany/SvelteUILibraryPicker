<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/UIShell
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import {
		Content,
		Header,
		SideNav,
		SideNavDivider,
		SideNavItems,
		SideNavLink,
		SideNavMenu,
		SideNavMenuItem,
	} from 'carbon-components-svelte'
</script>

<Header companyName="Acme" platformName="Studio" />

<SideNav fixed isOpen>
	<SideNavItems>
		<SideNavLink href="#home" text="Home" isSelected />
		<SideNavLink href="#projects" text="Projects" />
		<SideNavMenu text="Settings" expanded>
			<SideNavMenuItem href="#profile" text="Profile" />
			<SideNavMenuItem href="#billing" text="Billing" />
		</SideNavMenu>
		<SideNavDivider />
		<SideNavLink href="#help" text="Help" />
	</SideNavItems>
</SideNav>

<Content>
	<p>Page content sits beside the side nav.</p>
</Content>
