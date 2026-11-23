<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/UIShell
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		HeaderSideNavItems,
		SideNav,
		SideNavItems,
	} from 'carbon-components-svelte'

	// Below 1056px (like this frame) Carbon hides the header links and lists them
	// in the side nav behind the hamburger button.
	let isSideNavOpen = $state(false)
</script>

<Header companyName="Acme" platformName="Studio" bind:isSideNavOpen>
	<HeaderNav>
		<HeaderNavItem href="#overview" text="Overview" isSelected />
		<HeaderNavItem href="#pricing" text="Pricing" />
		<HeaderNavMenu text="Resources">
			<HeaderNavItem href="#guides" text="Guides" />
			<HeaderNavItem href="#blog" text="Blog" />
		</HeaderNavMenu>
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<HeaderSideNavItems>
			<HeaderNavItem href="#overview" text="Overview" isSelected />
			<HeaderNavItem href="#pricing" text="Pricing" />
			<HeaderNavMenu text="Resources">
				<HeaderNavItem href="#guides" text="Guides" />
				<HeaderNavItem href="#blog" text="Blog" />
			</HeaderNavMenu>
		</HeaderSideNavItems>
	</SideNavItems>
</SideNav>
