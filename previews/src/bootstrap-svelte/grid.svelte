<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/layout/grid
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Card, Col, Container, Row } from '@winkintel/bootstrap-svelte'
</script>

<!-- The grid itself is invisible, so each column holds a Card to show where it sits. -->
<Container>
	<Row>
		<Col><Card.Root><Card.Body>One of three</Card.Body></Card.Root></Col>
		<Col><Card.Root><Card.Body>Two of three</Card.Body></Card.Root></Col>
		<Col><Card.Root><Card.Body>Three of three</Card.Body></Card.Root></Col>
	</Row>
	<Row>
		<Col sizing={8}><Card.Root><Card.Body>Eight columns</Card.Body></Card.Root></Col>
		<Col sizing={4}><Card.Root><Card.Body>Four columns</Card.Body></Card.Root></Col>
	</Row>
</Container>
