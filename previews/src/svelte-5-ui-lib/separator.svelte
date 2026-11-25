<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The separator is called Hr.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/typography/hr/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Hr, P } from 'svelte-5-ui-lib'
</script>

<P>Text above the line.</P>
<Hr />
<P>Text below the line.</P>
<Hr>or</Hr>
