<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/switch
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	let checked = $state(true)
</script>

<Switch {checked} onCheckedChange={(details) => (checked = details.checked)}>
	<Switch.Control>
		<Switch.Thumb />
	</Switch.Control>
	<Switch.Label>Notifications ({checked ? 'on' : 'off'})</Switch.Label>
	<Switch.HiddenInput />
</Switch>
