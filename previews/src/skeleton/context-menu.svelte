<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The context trigger area uses Skeleton's own `card` class and a surface border colour.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/menu#context-menu
-->
<script lang="ts">
	import './styles.css'
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Menu>
	<Menu.ContextTrigger class="card border border-dashed border-surface-200-800 p-8">
		Right-click this area
	</Menu.ContextTrigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Menu.Item value="rename">
					<Menu.ItemText>Rename</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="share">
					<Menu.ItemText>Share</Menu.ItemText>
				</Menu.Item>
				<Menu.Separator />
				<Menu.Item value="remove">
					<Menu.ItemText>Remove</Menu.ItemText>
				</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
