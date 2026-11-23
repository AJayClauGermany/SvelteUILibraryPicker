<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#search-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let query = $state('')
</script>

<Form.InputLabel for="search">Search fruit</Form.InputLabel>
<Form.SearchInput id="search" bind:value={query} list="fruits" placeholder="Type to search" />
<datalist id="fruits">
	<option value="Apple"></option>
	<option value="Banana"></option>
	<option value="Cherry"></option>
</datalist>
