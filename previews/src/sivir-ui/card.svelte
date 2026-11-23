<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/card
-->
<script lang="ts">
	import './styles.css'
	import { Button } from '@sivir-ui/svelte/components/button'
	import * as Card from '@sivir-ui/svelte/components/card'
</script>

<Card.Root class="w-full max-w-[28rem]">
	<Card.Header>
		<Card.Title>Storage</Card.Title>
		<Card.Description>Shared by everyone in this workspace.</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>4.2 GB of 10 GB used.</p>
	</Card.Content>
	<Card.Footer>
		<Button variant="outline">Manage files</Button>
		<Button>Upgrade</Button>
	</Card.Footer>
</Card.Root>
