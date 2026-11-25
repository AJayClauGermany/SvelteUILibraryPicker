<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. The docs show it inside full
  navbar examples; this is the base NavigationMenu on its own.
  Docs: https://originui-svelte.pages.dev/navbars
-->
<script lang="ts">
	import './styles.css'
	import * as NavigationMenu from './ui/navigation-menu/index.js'
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link>
				<NavigationMenu.Link href="#reports">Reports</NavigationMenu.Link>
				<NavigationMenu.Link href="#exports">Exports</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#pricing">Pricing</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#about">About</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
