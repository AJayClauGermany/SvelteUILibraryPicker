<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/popover
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import * as Popover from './ui/popover/index.ts'
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Show details</Popover.Trigger>
	<Popover.Content class="w-80">
		<p class="font-medium">Order #1042</p>
		<p class="text-muted-foreground text-sm">Packed and waiting for the courier.</p>
	</Popover.Content>
</Popover.Root>
