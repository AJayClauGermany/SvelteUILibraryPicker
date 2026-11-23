<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/sidebar
-->
<script lang="ts">
	import './styles.css'
	import * as Sidebar from '@sivir-ui/svelte/components/sidebar'

	let open = $state(true)
</script>

<Sidebar.Root bind:open variant="inset" class="h-96 rounded-[var(--radius-xl)] border border-border">
	<Sidebar.Panel>
		<Sidebar.Header>Acme</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Workspace</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						<Sidebar.Item>
							<Sidebar.ItemButton active>
								<Sidebar.ItemLabel>Inbox</Sidebar.ItemLabel>
							</Sidebar.ItemButton>
							<Sidebar.ItemBadge>4</Sidebar.ItemBadge>
						</Sidebar.Item>
						<Sidebar.Item>
							<Sidebar.ItemButton>
								<Sidebar.ItemLabel>Projects</Sidebar.ItemLabel>
							</Sidebar.ItemButton>
						</Sidebar.Item>
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
		<Sidebar.Footer>Settings</Sidebar.Footer>
	</Sidebar.Panel>
	<Sidebar.Inset>
		<header class="flex h-12 shrink-0 items-center gap-2 border-b border-border px-3">
			<Sidebar.Trigger />
			<span>Inbox</span>
		</header>
	</Sidebar.Inset>
</Sidebar.Root>
