<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Skeleton styles only the layout; as in its docs, the trigger uses Skeleton's `btn` classes.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/collapsible
-->
<script lang="ts">
	import './styles.css'
	import { Collapsible } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Collapsible>
	<Collapsible.Trigger class="btn preset-tonal">Show details</Collapsible.Trigger>
	<Collapsible.Content>Here are the details that were hidden.</Collapsible.Content>
</Collapsible>
