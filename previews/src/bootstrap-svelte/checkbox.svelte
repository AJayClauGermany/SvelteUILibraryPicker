<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#checkbox-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let terms = $state(true)
</script>

<Form.Check>
	<Form.CheckInput id="terms" bind:checked={terms} />
	<Form.CheckLabel for="terms">Accept terms</Form.CheckLabel>
</Form.Check>
<Form.Check>
	<Form.CheckInput id="news" />
	<Form.CheckLabel for="news">Send me news</Form.CheckLabel>
</Form.Check>
<Form.Check>
	<Form.CheckInput id="some" isIndeterminate />
	<Form.CheckLabel for="some">Some selected</Form.CheckLabel>
</Form.Check>
<Form.Check>
	<Form.CheckInput id="locked" disabled />
	<Form.CheckLabel for="locked">Disabled</Form.CheckLabel>
</Form.Check>
