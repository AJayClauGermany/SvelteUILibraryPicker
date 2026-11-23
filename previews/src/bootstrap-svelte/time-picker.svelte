<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#time-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let time = $state('09:30')
</script>

<Form.InputLabel for="meeting">Meeting time</Form.InputLabel>
<Form.TimeInput id="meeting" bind:value={time} min="08:00" max="18:00" />
<Form.HelperText>Between 08:00 and 18:00.</Form.HelperText>
