<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-listgroup--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { ListGroup, ListGroupItem } from '@sveltestrap/sveltestrap'
</script>

<ListGroup>
	<ListGroupItem active>Inbox</ListGroupItem>
	<ListGroupItem>Drafts</ListGroupItem>
	<ListGroupItem>Sent</ListGroupItem>
	<ListGroupItem disabled>Archive</ListGroupItem>
</ListGroup>
