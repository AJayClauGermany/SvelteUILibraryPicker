<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/popover
-->
<script lang="ts">
	import './styles.css'
	import * as Popover from './ui/popover/index.js'
	import { buttonVariants } from './ui/button/index.js'
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Share</Popover.Trigger>
	<Popover.Content align="start">
		<Popover.Header>
			<Popover.Title>Share this page</Popover.Title>
			<Popover.Description>Anyone with the link can view it.</Popover.Description>
		</Popover.Header>
	</Popover.Content>
</Popover.Root>
