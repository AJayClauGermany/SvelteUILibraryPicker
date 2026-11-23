<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#password-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let password = $state('')
	let show = $state(false)
</script>

<Form.InputLabel for="password">Password</Form.InputLabel>
<Form.PasswordInput id="password" bind:value={password} showPassword={show} placeholder="Enter a password" />
<Form.Check>
	<Form.CheckInput id="show" bind:checked={show} />
	<Form.CheckLabel for="show">Show password</Form.CheckLabel>
</Form.Check>
