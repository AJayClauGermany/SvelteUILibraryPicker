<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/utilities/label
-->
<script lang="ts">
	import './styles.css'
	import { Input, Label } from 'flowbite-svelte'
</script>

<Label for="email" class="mb-2">Email</Label>
<Input id="email" type="email" placeholder="name@example.com" />

<Label for="username" color="green" class="mt-4 mb-2">Username</Label>
<Input id="username" color="green" value="available-name" />
