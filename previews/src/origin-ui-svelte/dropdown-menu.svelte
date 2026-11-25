<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/dropdowns
-->
<script lang="ts">
	import './styles.css'
	import * as DropdownMenu from './ui/dropdowns/index.js'
	import { buttonVariants } from './ui/button.svelte'

	let showGrid = $state(true)
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>Options</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Label>My account</DropdownMenu.Label>
		<DropdownMenu.Item>
			Profile
			<DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
		</DropdownMenu.Item>
		<DropdownMenu.Item>Billing</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.CheckboxItem bind:checked={showGrid}>Show grid</DropdownMenu.CheckboxItem>
		<DropdownMenu.Separator />
		<DropdownMenu.Item disabled>Sign out</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
