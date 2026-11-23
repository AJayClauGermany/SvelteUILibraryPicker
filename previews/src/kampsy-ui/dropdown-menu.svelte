<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/menu
-->
<script lang="ts">
	import './styles.css'
	import { Menu } from 'kampsy-ui'

	let last = $state('none')
</script>

<Menu.Root>
	<Menu.Button aria-haspopup="true">Project</Menu.Button>
	<Menu.Content class="w-[200px]">
		<Menu.Item onClick={() => (last = 'Rename')}>Rename</Menu.Item>
		<Menu.Item onClick={() => (last = 'Duplicate')}>Duplicate</Menu.Item>
		<Menu.Link href="#settings">Settings</Menu.Link>
		<Menu.Item onClick={() => (last = 'Delete')} type="error">Delete</Menu.Item>
	</Menu.Content>
</Menu.Root>
<p>Last action: {last}</p>
