<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/item
-->
<script lang="ts">
	import './styles.css'
	import * as Item from './ui/item/index.ts'
	import { Button } from './ui/button/index.ts'
</script>

<Item.Group>
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Quarterly report</Item.Title>
			<Item.Description>Updated two hours ago</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm">Open</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Separator />
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Team budget</Item.Title>
			<Item.Description>Shared with finance</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm">Open</Button>
		</Item.Actions>
	</Item.Root>
</Item.Group>
