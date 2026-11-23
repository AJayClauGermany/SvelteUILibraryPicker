<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/empty
-->
<script lang="ts">
	import './styles.css'
	import * as Empty from './ui/empty/index.ts'
	import { Button } from './ui/button/index.ts'
	import InboxIcon from '@lucide/svelte/icons/inbox'
</script>

<Empty.Root>
	<Empty.Header>
		<Empty.Media variant="icon">
			<InboxIcon />
		</Empty.Media>
		<Empty.Title>No messages yet</Empty.Title>
		<Empty.Description>New messages from your team will show up here.</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button>Write a message</Button>
	</Empty.Content>
</Empty.Root>
