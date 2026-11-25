<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/form/form-input
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, FormCheckbox, FormInput, FormSelect } from 'yesvelte'
</script>

<!-- There is no form container: each control has a Form* wrapper with label, hint and state. -->
<FormInput label="Email" placeholder="you@example.com" hint="We only use it to sign you in." required />
<FormSelect label="Plan" items={['Free', 'Pro', 'Team']} value="Pro" />
<FormCheckbox label="Terms">I accept the terms</FormCheckbox>
<Button color="primary" type="submit">Create account</Button>
