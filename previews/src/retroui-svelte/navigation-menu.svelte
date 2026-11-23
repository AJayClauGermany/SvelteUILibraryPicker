<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/navigation-menu
-->
<script lang="ts">
	import './styles.css'
	import * as NavigationMenu from './ui/navigation-menu/index.js'
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="#">Editor</NavigationMenu.Link>
						<NavigationMenu.Link href="#">Viewer</NavigationMenu.Link>
						<NavigationMenu.Link href="#">Exporter</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="#">Guides</NavigationMenu.Link>
						<NavigationMenu.Link href="#">Changelog</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
