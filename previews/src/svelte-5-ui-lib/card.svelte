<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/card/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, Card } from 'svelte-5-ui-lib'
</script>

<Card>
	<h5>Weekly report</h5>
	<p>Sales grew by four percent compared with last week.</p>
	<br />
	<Button>Read more</Button>
</Card>
