<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/empty
-->
<script lang="ts">
	import './styles.css'
	import InboxIcon from '@lucide/svelte/icons/inbox'
	import * as Empty from './ui/empty/index.js'
	import { Button } from './ui/button/index.js'
</script>

<Empty.Root>
	<Empty.Header>
		<Empty.Media variant="icon">
			<InboxIcon />
		</Empty.Media>
		<Empty.Title>No messages yet</Empty.Title>
		<Empty.Description>New messages from your team will appear here.</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button>Start a conversation</Button>
	</Empty.Content>
</Empty.Root>
