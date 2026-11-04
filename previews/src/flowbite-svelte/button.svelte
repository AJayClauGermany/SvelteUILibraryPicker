<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/buttons
-->
<script lang="ts">
	import './styles.css'
	import { Button } from 'flowbite-svelte'
</script>

<Button>Primary</Button>
<Button color="alternative">Alternative</Button>
<Button outline>Outline</Button>
