<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The link component is called A in Flowbite Svelte.
  Docs: https://flowbite-svelte.com/docs/typography/link
-->
<script lang="ts">
	import './styles.css'
	import { A, P } from 'flowbite-svelte'
</script>

<P>
	Read the <A href="#top">getting started guide</A> before you begin.
</P>
<P>
	<A href="#top" color="gray">A gray link</A>
</P>
