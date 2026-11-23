<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/drawer
-->
<script lang="ts">
	import './styles.css'
	import * as Drawer from './ui/drawer/index.js'
	import { Button, buttonVariants } from './ui/button/index.js'
</script>

<Drawer.Root>
	<Drawer.Trigger class={buttonVariants({ variant: 'outline' })}>Open drawer</Drawer.Trigger>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title>Share this page</Drawer.Title>
			<Drawer.Description>Anyone with the link will be able to view it.</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer>
			<Button>Copy link</Button>
			<Drawer.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
