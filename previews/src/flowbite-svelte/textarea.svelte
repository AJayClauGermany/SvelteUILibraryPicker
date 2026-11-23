<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Label, Textarea } from 'flowbite-svelte'
</script>

<Label for="message" class="mb-2">Message</Label>
<Textarea id="message" rows={4} placeholder="Write your message" />
