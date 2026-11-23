<!--
  Skeleton documents its Tooltip as "headless" (no default styles), and dresses the content
  with Skeleton's own Tailwind classes (`card`, presets). This preview does the same, minimally.
  ./styles.css loads the cerberus theme; the script sets the install guide's data-theme.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Tooltip positioning={{ placement: 'top' }}>
	<Tooltip.Trigger class="btn preset-tonal">Hover me</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content class="card preset-filled-surface-950-50 p-2">A short hint</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
