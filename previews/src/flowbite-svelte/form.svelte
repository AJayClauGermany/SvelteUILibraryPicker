<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The spacing classes are the ones its forms docs use between fields.
  Docs: https://flowbite-svelte.com/docs/components/forms
-->
<script lang="ts">
	import './styles.css'
	import { Button, Checkbox, Helper, Input, Label } from 'flowbite-svelte'
</script>

<form onsubmit={(e) => e.preventDefault()}>
	<div class="mb-4">
		<Label for="email" class="mb-2">Email</Label>
		<Input id="email" type="email" placeholder="name@example.com" />
	</div>
	<div class="mb-4">
		<Label for="username" color="red" class="mb-2">Username</Label>
		<Input id="username" color="red" value="ab" />
		<Helper class="mt-2" color="red">Use at least three characters.</Helper>
	</div>
	<div class="mb-4">
		<Checkbox>Remember me</Checkbox>
	</div>
	<Button type="submit">Sign in</Button>
</form>
