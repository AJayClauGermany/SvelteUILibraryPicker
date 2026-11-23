<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/button-group
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { ButtonCheck, ButtonGroup } from '@winkintel/bootstrap-svelte'

	let view = $state('list')
</script>

<ButtonGroup ariaLabel="View mode">
	<ButtonCheck bind:group={view} colorVariant="outline-primary" name="view" type="radio" value="list">List</ButtonCheck>
	<ButtonCheck bind:group={view} colorVariant="outline-primary" name="view" type="radio" value="grid">Grid</ButtonCheck>
	<ButtonCheck bind:group={view} colorVariant="outline-primary" name="view" type="radio" value="table">Table</ButtonCheck>
</ButtonGroup>
