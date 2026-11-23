<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/popover
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.js'
	import * as Popover from './ui/popover/index.js'
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Open popover</Popover.Trigger>
	<Popover.Content class="w-64">
		Popovers hold short, related content next to their trigger.
	</Popover.Content>
</Popover.Root>
