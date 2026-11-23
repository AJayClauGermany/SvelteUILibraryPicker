<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/menu
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import {
		Menu,
		MenuCheckboxItem,
		MenuItem,
		MenuPopup,
		MenuSeparator,
		MenuShortcut,
		MenuTrigger,
	} from './ui/menu/index.ts'

	let pinned = $state(true)
</script>

<Menu>
	<MenuTrigger class={buttonVariants({ variant: 'outline' })}>Options</MenuTrigger>
	<MenuPopup>
		<MenuItem>Rename <MenuShortcut>F2</MenuShortcut></MenuItem>
		<MenuItem>Duplicate</MenuItem>
		<MenuCheckboxItem bind:checked={pinned}>Pinned</MenuCheckboxItem>
		<MenuSeparator />
		<MenuItem variant="destructive">Delete</MenuItem>
	</MenuPopup>
</Menu>
