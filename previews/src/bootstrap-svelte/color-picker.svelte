<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#color-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let color = $state('#0d6efd')
</script>

<Form.InputLabel for="accent">Accent color</Form.InputLabel>
<Form.ColorInput id="accent" bind:value={color} title="Pick an accent color" />
<p>Selected: {color}</p>
