<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Heading renders h1 to h6 through its `tag` prop; P is the paragraph component.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/typography/heading/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Heading, P } from 'svelte-5-ui-lib'
</script>

<Heading>Heading one</Heading>
<Heading tag="h3">Heading three</Heading>
<P>A paragraph of body text set with the P component.</P>
