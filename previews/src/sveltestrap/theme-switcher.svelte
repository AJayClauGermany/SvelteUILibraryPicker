<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. ThemeToggler flips
  Bootstrap's data-bs-theme on the page; Theme pins a colour mode for its children. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-theme--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Card, CardBody, CardText, Theme, ThemeToggler } from '@sveltestrap/sveltestrap'
</script>

<ThemeToggler let:currentColorMode let:toggleColorMode>
	<Button color="primary" onclick={() => toggleColorMode()}>Toggle theme ({currentColorMode})</Button>
</ThemeToggler>

<Card>
	<CardBody>
		<CardText>This card follows the page theme.</CardText>
	</CardBody>
</Card>

<Theme theme="dark">
	<Card>
		<CardBody>
			<CardText>This card is always dark.</CardText>
		</CardBody>
	</Card>
</Theme>
