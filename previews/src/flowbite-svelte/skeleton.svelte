<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Flowbite Svelte ships several placeholder presets; a few are shown here.
  Docs: https://flowbite-svelte.com/docs/components/skeleton
-->
<script lang="ts">
	import './styles.css'
	import { ImagePlaceholder, Skeleton, TestimonialPlaceholder } from 'flowbite-svelte'
</script>

<Skeleton />
<br />
<TestimonialPlaceholder />
<br />
<ImagePlaceholder />
