<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/phone-input
-->
<script lang="ts">
	import './styles.css'
	import { Label, PhoneInput } from 'flowbite-svelte'
</script>

<Label for="phone" class="mb-2">Phone number</Label>
<PhoneInput id="phone" placeholder="123-456-7890" />
