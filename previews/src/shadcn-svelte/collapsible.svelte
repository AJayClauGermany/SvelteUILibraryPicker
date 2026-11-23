<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/collapsible
-->
<script lang="ts">
	import './styles.css'
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down'
	import * as Collapsible from './ui/collapsible/index.js'
	import { Button } from './ui/button/index.js'

	let open = $state(true)
</script>

<Collapsible.Root bind:open class="flex w-[350px] flex-col gap-2">
	<Collapsible.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" class="justify-between">
				Release notes
				<ChevronsUpDownIcon />
			</Button>
		{/snippet}
	</Collapsible.Trigger>
	<Collapsible.Content class="text-sm">
		Version 2.1 adds keyboard shortcuts and fixes the export dialog.
	</Collapsible.Content>
</Collapsible.Root>
