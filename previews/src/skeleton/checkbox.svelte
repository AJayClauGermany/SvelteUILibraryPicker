<!--
  Skeleton has no Checkbox component: its forms page styles the native input with the
  `checkbox` class (on top of the @tailwindcss/forms plugin), which IS its default.
  ./styles.css loads Skeleton's cerberus theme and that plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#checkboxes
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	let checked = $state(true)
</script>

<label>
	<input class="checkbox" type="checkbox" bind:checked />
	Email me updates ({checked ? 'yes' : 'no'})
</label>
