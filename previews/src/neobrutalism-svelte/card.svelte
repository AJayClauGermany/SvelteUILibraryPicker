<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/card
-->
<script lang="ts">
	import './styles.css'
	import * as Card from './ui/card/index.ts'
	import { Button } from './ui/button/index.ts'
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Weekly report</Card.Title>
		<Card.Description>Summary for the last seven days</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>12 tasks done, 3 still open.</p>
	</Card.Content>
	<Card.Footer>
		<Button>Open report</Button>
	</Card.Footer>
</Card.Root>
