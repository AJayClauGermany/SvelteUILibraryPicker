<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The progress bar is called Progressbar in Flowbite.
  Docs: https://flowbite-svelte.com/docs/components/progress
-->
<script lang="ts">
	import './styles.css'
	import { Progressbar } from 'flowbite-svelte'
</script>

<Progressbar progress="45" />
<br />
<Progressbar progress="70" labelOutside="Uploading" color="green" />
<br />
<Progressbar progress="30" labelInside size="h-4" />
