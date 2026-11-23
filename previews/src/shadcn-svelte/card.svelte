<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/card
-->
<script lang="ts">
	import './styles.css'
	import * as Card from './ui/card/index.js'
	import { Button } from './ui/button/index.js'
</script>

<Card.Root class="w-full max-w-sm">
	<Card.Header>
		<Card.Title>Team plan</Card.Title>
		<Card.Description>Shared workspace for up to ten people.</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Includes unlimited projects, guest access and priority support.</p>
	</Card.Content>
	<Card.Footer>
		<Button>Upgrade</Button>
	</Card.Footer>
</Card.Root>
