<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/navigation-menu
-->
<script lang="ts">
	import { NavigationMenu } from '@ark-ui/svelte/navigation-menu'
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item value="learn">
			<NavigationMenu.Trigger>Learn</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#tutorial">Tutorial</NavigationMenu.Link>
				<NavigationMenu.Link href="#examples">Examples</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item value="blog">
			<NavigationMenu.Link href="#blog">Blog</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
