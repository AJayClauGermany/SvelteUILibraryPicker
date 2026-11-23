<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/form-formgroup--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Form, FormGroup, FormText, Input, Label } from '@sveltestrap/sveltestrap'
</script>

<Form>
	<FormGroup>
		<Label for="name">Name</Label>
		<Input id="name" placeholder="Ada Lovelace" />
	</FormGroup>
	<FormGroup>
		<Label for="mail">Email</Label>
		<Input id="mail" type="email" placeholder="name@example.com" />
		<FormText>We never share your address.</FormText>
	</FormGroup>
	<FormGroup>
		<Input id="news" type="checkbox" label="Send me updates" />
	</FormGroup>
	<Button color="primary" type="submit">Sign up</Button>
</Form>
