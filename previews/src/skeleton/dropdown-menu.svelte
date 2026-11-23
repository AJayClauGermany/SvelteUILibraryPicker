<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The trigger uses Skeleton's own `btn` classes, as the docs do.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/menu
-->
<script lang="ts">
	import './styles.css'
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Menu>
	<Menu.Trigger class="btn preset-filled">Actions</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Menu.Item value="edit">
					<Menu.ItemText>Edit</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="duplicate">
					<Menu.ItemText>Duplicate</Menu.ItemText>
				</Menu.Item>
				<Menu.Separator />
				<Menu.Item value="archive">
					<Menu.ItemText>Archive</Menu.ItemText>
				</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
