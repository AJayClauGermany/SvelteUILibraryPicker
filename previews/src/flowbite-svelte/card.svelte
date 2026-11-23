<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The heading and text use the Tailwind classes from the Flowbite Svelte card docs.
  Docs: https://flowbite-svelte.com/docs/components/card
-->
<script lang="ts">
	import './styles.css'
	import { Button, Card } from 'flowbite-svelte'
</script>

<Card class="p-6">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team meeting</h5>
	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
		The weekly sync moves to Thursday at 10:00 this week.
	</p>
	<Button>Add to calendar</Button>
</Card>
