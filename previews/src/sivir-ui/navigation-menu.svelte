<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/navigation-menu
-->
<script lang="ts">
	import './styles.css'
	import * as NavigationMenu from '@sivir-ui/svelte/components/navigation-menu'
</script>

<NavigationMenu.Root aria-label="Site">
	<NavigationMenu.List>
		<NavigationMenu.Item value="shop">
			<NavigationMenu.Trigger>Shop</NavigationMenu.Trigger>
			<NavigationMenu.Content class="w-48">
				<NavigationMenu.Link href="#new">New arrivals</NavigationMenu.Link>
				<NavigationMenu.Link href="#sale">On sale</NavigationMenu.Link>
				<NavigationMenu.Link href="#gifts">Gift cards</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item value="help">
			<NavigationMenu.Trigger>Help</NavigationMenu.Trigger>
			<NavigationMenu.Content class="w-48">
				<NavigationMenu.Link href="#shipping">Shipping</NavigationMenu.Link>
				<NavigationMenu.Link href="#returns">Returns</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#about">About</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
	<NavigationMenu.Viewport />
</NavigationMenu.Root>
