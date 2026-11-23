<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/layout-grid--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Card, Col, Container, Row } from '@sveltestrap/sveltestrap'
</script>

<!-- The grid itself is invisible, so each column holds a Card to show where it sits. -->
<Container>
	<Row>
		<Col><Card body>One of three</Card></Col>
		<Col><Card body>Two of three</Card></Col>
		<Col><Card body>Three of three</Card></Col>
	</Row>
	<Row>
		<Col xs="8"><Card body>Eight columns</Card></Col>
		<Col xs="4"><Card body>Four columns</Card></Col>
	</Row>
</Container>
