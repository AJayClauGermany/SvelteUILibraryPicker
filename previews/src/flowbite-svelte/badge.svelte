<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/badge
-->
<script lang="ts">
	import './styles.css'
	import { Badge } from 'flowbite-svelte'
</script>

<Badge>Default</Badge>
<Badge color="green">Green</Badge>
<Badge color="red">Red</Badge>
<Badge border>Bordered</Badge>
