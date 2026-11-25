<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/floating
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, Card, CardBody, Floating } from 'yesvelte'
</script>

<!-- Floating pins its child to a corner of the parent; here a round Button, as the docs do. -->
<Card>
	<CardBody>A card with a floating button.</CardBody>
	<Floating offset={10}>
		<Button color="primary" shape="pill">+</Button>
	</Floating>
</Card>
