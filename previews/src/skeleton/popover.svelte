<!--
  Like Dialog, Skeleton's Popover content ships without a surface of its own; the docs dress
  the trigger and content with Skeleton's own Tailwind classes (`btn`, `card`, presets and
  surface colours), and this preview uses the minimum of those. ./styles.css loads the
  cerberus theme; the script sets the install guide's data-theme.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/popover
-->
<script lang="ts">
	import './styles.css'
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Popover>
	<Popover.Trigger class="btn preset-filled">Show details</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card bg-surface-100-900 w-72 p-4 space-y-2 shadow-xl">
				<Popover.Title class="font-bold">Release notes</Popover.Title>
				<Popover.Description>A short message shown next to the trigger.</Popover.Description>
				<Popover.CloseTrigger class="btn preset-tonal">Close</Popover.CloseTrigger>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
