<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/drawer
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import {
		Drawer,
		DrawerClose,
		DrawerDescription,
		DrawerFooter,
		DrawerHeader,
		DrawerPanel,
		DrawerPopup,
		DrawerTitle,
		DrawerTrigger,
	} from './ui/drawer/index.ts'
</script>

<Drawer>
	<DrawerTrigger class={buttonVariants({ variant: 'outline' })}>Show filters</DrawerTrigger>
	<DrawerPopup showBar>
		<DrawerHeader>
			<DrawerTitle>Filters</DrawerTitle>
			<DrawerDescription>Narrow the list by status and owner.</DrawerDescription>
		</DrawerHeader>
		<DrawerPanel>No filters applied yet.</DrawerPanel>
		<DrawerFooter>
			<DrawerClose class={buttonVariants({ variant: 'outline' })}>Done</DrawerClose>
		</DrawerFooter>
	</DrawerPopup>
</Drawer>
