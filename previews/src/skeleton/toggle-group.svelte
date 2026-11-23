<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/toggle-group
-->
<script lang="ts">
	import './styles.css'
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<ToggleGroup defaultValue={['left']}>
	<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
	<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
	<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup>
