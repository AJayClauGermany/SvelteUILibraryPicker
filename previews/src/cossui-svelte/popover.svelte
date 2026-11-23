<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/popover
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import {
		Popover,
		PopoverClose,
		PopoverDescription,
		PopoverPopup,
		PopoverTitle,
		PopoverTrigger,
	} from './ui/popover/index.ts'
</script>

<Popover>
	<PopoverTrigger class={buttonVariants({ variant: 'outline' })}>Share</PopoverTrigger>
	<PopoverPopup class="w-72">
		<PopoverTitle>Share this page</PopoverTitle>
		<PopoverDescription>Anyone with the link can view it.</PopoverDescription>
		<PopoverClose class={buttonVariants({ size: 'sm' })}>Copy link</PopoverClose>
	</PopoverPopup>
</Popover>
