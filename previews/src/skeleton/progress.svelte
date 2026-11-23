<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/progress-linear
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<Progress value={60}>
	<Progress.Label>Uploading</Progress.Label>
	<Progress.ValueText />
	<Progress.Track>
		<Progress.Range />
	</Progress.Track>
</Progress>
