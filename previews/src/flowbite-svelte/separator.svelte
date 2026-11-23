<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/typography/hr
-->
<script lang="ts">
	import './styles.css'
	import { Hr, P } from 'flowbite-svelte'
</script>

<P>Text above a plain rule.</P>
<Hr />
<P>Text between two rules.</P>
<Hr>
	<P>or</P>
</Hr>
<P>Text below a labelled rule.</P>
