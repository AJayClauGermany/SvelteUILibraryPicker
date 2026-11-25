<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The link component is called A.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/typography/link/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { A, P } from 'svelte-5-ui-lib'
</script>

<P>Read the <A href="#guide">getting started guide</A> first.</P>
