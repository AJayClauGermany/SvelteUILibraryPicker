<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#number-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let quantity = $state(1)
</script>

<Form.InputLabel for="quantity">Quantity</Form.InputLabel>
<Form.NumberInput id="quantity" min={1} max={10} bind:value={quantity} />
