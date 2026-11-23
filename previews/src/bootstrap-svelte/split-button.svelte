<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/dropdown
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Dropdown } from '@winkintel/bootstrap-svelte'
</script>

<Dropdown.Root isButtonGroup>
	<Button colorVariant="primary">Save</Button>
	<Dropdown.Toggle colorVariant="primary" isSplit />
	<Dropdown.Menu>
		<Dropdown.Item>Save as draft</Dropdown.Item>
		<Dropdown.Item>Save and close</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown.Root>
