<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/card
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Card } from '@winkintel/bootstrap-svelte'
</script>

<Card.Root>
	<Card.Header>Project</Card.Header>
	<Card.Body>
		<Card.Title>Website redesign</Card.Title>
		<Card.Subtitle>Due next Friday</Card.Subtitle>
		<Card.Text>Three tasks left before the review.</Card.Text>
		<Button colorVariant="primary">Open project</Button>
	</Card.Body>
	<Card.Footer>Updated 2 hours ago</Card.Footer>
</Card.Root>
