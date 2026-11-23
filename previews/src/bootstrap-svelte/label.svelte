<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'
</script>

<Form.InputLabel for="city">City</Form.InputLabel>
<Form.TextInput id="city" placeholder="Lisbon" />
<br />
<Form.Floating>
	<Form.EmailInput id="email" placeholder="name@example.com" />
	<Form.InputLabel for="email" isFloating>Email address</Form.InputLabel>
</Form.Floating>
