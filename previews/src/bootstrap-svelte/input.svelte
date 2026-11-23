<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#text-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let name = $state('')
</script>

<Form.InputLabel for="name">Display name</Form.InputLabel>
<Form.TextInput bind:value={name} id="name" placeholder="Jane Doe" aria-describedby="name-help" />
<Form.HelperText id="name-help">Shown on your public profile.</Form.HelperText>
