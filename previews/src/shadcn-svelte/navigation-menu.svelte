<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/navigation-menu
-->
<script lang="ts">
	import './styles.css'
	import * as NavigationMenu from './ui/navigation-menu/index.js'
	import { navigationMenuTriggerStyle } from './ui/navigation-menu/navigation-menu-trigger.svelte'
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Guides</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="w-64">
					<li><NavigationMenu.Link href="#start">Getting started</NavigationMenu.Link></li>
					<li><NavigationMenu.Link href="#theming">Theming</NavigationMenu.Link></li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#blog" class={navigationMenuTriggerStyle()}>Blog</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
