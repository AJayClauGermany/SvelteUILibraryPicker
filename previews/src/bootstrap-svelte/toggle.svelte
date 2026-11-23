<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#buttoncheck-inputs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { ButtonCheck } from '@winkintel/bootstrap-svelte'

	let bold = $state(true)
</script>

<ButtonCheck bind:checked={bold} colorVariant="outline-primary">Bold</ButtonCheck>
<ButtonCheck colorVariant="outline-primary">Italic</ButtonCheck>
<ButtonCheck disabled colorVariant="outline-primary">Disabled</ButtonCheck>
