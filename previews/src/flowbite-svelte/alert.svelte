<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/alert
-->
<script lang="ts">
	import './styles.css'
	import { Alert } from 'flowbite-svelte'
</script>

<Alert>Your changes were saved.</Alert>
<Alert color="green">Everything is up to date.</Alert>
<Alert color="red" dismissable>Something went wrong.</Alert>
