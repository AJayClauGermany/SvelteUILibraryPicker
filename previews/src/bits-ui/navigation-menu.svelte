<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/navigation-menu
-->
<script lang="ts">
	import { NavigationMenu } from 'bits-ui'
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link>
				<NavigationMenu.Link href="#reports">Reports</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#pricing">Pricing</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#about">About</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
	<NavigationMenu.Viewport />
</NavigationMenu.Root>
