<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. Theme pins a
  Bootstrap colour mode (data-bs-theme) for its children. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-theme--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Card, CardBody, CardText, Theme } from '@sveltestrap/sveltestrap'
</script>

<Card>
	<CardBody>
		<CardText>This card follows the page.</CardText>
	</CardBody>
</Card>

<Theme theme="dark">
	<Card>
		<CardBody>
			<CardText>This card is always dark.</CardText>
		</CardBody>
	</Card>
</Theme>
