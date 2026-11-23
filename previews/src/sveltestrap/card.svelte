<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-card--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle,
	} from '@sveltestrap/sveltestrap'
</script>

<Card>
	<CardHeader>Project</CardHeader>
	<CardBody>
		<CardTitle>Website redesign</CardTitle>
		<CardSubtitle>Due next Friday</CardSubtitle>
		<CardText>Three tasks left before the review.</CardText>
		<Button color="primary">Open project</Button>
	</CardBody>
	<CardFooter>Updated 2 hours ago</CardFooter>
</Card>
