<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/note
-->
<script lang="ts">
	import './styles.css'
	import { Button, Note } from 'kampsy-ui'
</script>

{#snippet upgrade()}
	<Button size="small">Upgrade</Button>
{/snippet}

<Note>Your trial ends in three days.</Note>
<Note type="success">Deployment finished.</Note>
<Note type="warning" action={upgrade}>You are close to your usage limit.</Note>
<Note fill type="error">The build failed.</Note>
