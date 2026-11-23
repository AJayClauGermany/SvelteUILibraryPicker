<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/accordion
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Accordion } from '@winkintel/bootstrap-svelte'
</script>

<Accordion.Root>
	<Accordion.Item isExpanded={true}>
		<Accordion.Header>
			<Accordion.Button>What is included?</Accordion.Button>
		</Accordion.Header>
		<Accordion.Collapse>
			<Accordion.Body>All components, with free updates for a year.</Accordion.Body>
		</Accordion.Collapse>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Header>
			<Accordion.Button>Can I cancel later?</Accordion.Button>
		</Accordion.Header>
		<Accordion.Collapse>
			<Accordion.Body>Yes, at any time from your account settings.</Accordion.Body>
		</Accordion.Collapse>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Header>
			<Accordion.Button>Do you offer support?</Accordion.Button>
		</Accordion.Header>
		<Accordion.Collapse>
			<Accordion.Body>Email support is included with every plan.</Accordion.Body>
		</Accordion.Collapse>
	</Accordion.Item>
</Accordion.Root>
