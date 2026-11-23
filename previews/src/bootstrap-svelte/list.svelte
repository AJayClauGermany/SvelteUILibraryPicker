<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/list-group
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { ListGroup } from '@winkintel/bootstrap-svelte'
</script>

<ListGroup.Root>
	<ListGroup.Item isActive={true}>Inbox</ListGroup.Item>
	<ListGroup.Item>Drafts</ListGroup.Item>
	<ListGroup.Item>Sent</ListGroup.Item>
	<ListGroup.Item>Archive</ListGroup.Item>
</ListGroup.Root>
