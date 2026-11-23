<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-validation
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Form } from '@winkintel/bootstrap-svelte'

	let validated = $state(false)

	function submit(event: SubmitEvent) {
		event.preventDefault()
		validated = true
	}
</script>

<Form.Root needsValidation wasValidated={validated} novalidate onsubmit={submit}>
	<Form.InputLabel for="user">Username</Form.InputLabel>
	<Form.TextInput id="user" required />
	<Form.Feedback isInvalid>Please choose a username.</Form.Feedback>
	<Form.Feedback isValid>Looks good!</Form.Feedback>
	<br />
	<Button type="submit" colorVariant="primary">Submit</Button>
</Form.Root>
