<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/typography/heading
-->
<script lang="ts">
	import './styles.css'
	import { Blockquote, Heading, P } from 'flowbite-svelte'
</script>

<Heading tag="h2">Page heading</Heading>
<Heading tag="h4">Section heading</Heading>
<P>A paragraph of body text using the default paragraph styles.</P>
<Blockquote>A short quotation set off from the body text.</Blockquote>
