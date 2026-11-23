<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/card
-->
<script lang="ts">
	import './styles.css'
	import * as Card from './ui/card/index.js'
	import { Button } from './ui/button/index.js'
</script>

<Card.Root class="max-w-sm">
	<Card.Header>
		<Card.Title>Weekly digest</Card.Title>
		<Card.Description>A summary of what changed this week.</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Three new posts and two comments on your projects.</p>
	</Card.Content>
	<Card.Footer>
		<Button>Read more</Button>
	</Card.Footer>
</Card.Root>
