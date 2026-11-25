<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Layout is a wrapper div with a one-column grid that becomes two columns from the sm breakpoint.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/typography/layout/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Card, Layout } from 'svelte-5-ui-lib'
</script>

<Layout>
	<Card>First card</Card>
	<Card>Second card</Card>
	<Card>Third card</Card>
	<Card>Fourth card</Card>
</Layout>
