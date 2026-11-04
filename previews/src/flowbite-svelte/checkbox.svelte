<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from 'flowbite-svelte'
</script>

<Checkbox checked>Email updates</Checkbox>
<Checkbox>Weekly digest</Checkbox>
<Checkbox disabled>Unavailable option</Checkbox>
