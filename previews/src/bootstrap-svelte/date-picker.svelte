<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#date-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let date = $state('2026-03-14')
</script>

<Form.InputLabel for="start">Start date</Form.InputLabel>
<Form.DateInput id="start" bind:value={date} min="2026-01-01" />
<Form.HelperText>Chosen: {date}</Form.HelperText>
