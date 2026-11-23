<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/input-field
-->
<script lang="ts">
	import './styles.css'
	import { Input, Label } from 'flowbite-svelte'
</script>

<div class="mb-4">
	<Label for="name" class="mb-2">Name</Label>
	<Input id="name" placeholder="Jane Doe" />
</div>
<div class="mb-4">
	<Label for="small" class="mb-2">Small</Label>
	<Input id="small" size="sm" placeholder="Small input" />
</div>
<div>
	<Label for="disabled" class="mb-2">Disabled</Label>
	<Input id="disabled" value="Read only value" disabled />
</div>
