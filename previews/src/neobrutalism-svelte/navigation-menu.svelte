<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/navigation-menu
-->
<script lang="ts">
	import './styles.css'
	import * as NavigationMenu from './ui/navigation-menu/index.ts'
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li><NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link></li>
					<li><NavigationMenu.Link href="#billing">Billing</NavigationMenu.Link></li>
					<li><NavigationMenu.Link href="#reports">Reports</NavigationMenu.Link></li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Company</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li><NavigationMenu.Link href="#about">About us</NavigationMenu.Link></li>
					<li><NavigationMenu.Link href="#careers">Careers</NavigationMenu.Link></li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
