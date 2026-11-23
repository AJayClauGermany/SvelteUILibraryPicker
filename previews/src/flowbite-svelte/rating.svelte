<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/rating
-->
<script lang="ts">
	import './styles.css'
	import { Rating } from 'flowbite-svelte'
</script>

<Rating rating={4} />
<br />
<Rating rating={2.5} total={5} size={32} />
<br />
<Rating rating={3.7} total={10} size={20} />
