<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/dropdown
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Dropdown } from '@winkintel/bootstrap-svelte'
</script>

<Dropdown.Root>
	<Dropdown.Toggle colorVariant="primary">Options</Dropdown.Toggle>
	<Dropdown.Menu>
		<Dropdown.Header>Document</Dropdown.Header>
		<Dropdown.Item>Rename</Dropdown.Item>
		<Dropdown.Item>Duplicate</Dropdown.Item>
		<Dropdown.Item isDisabled>Move</Dropdown.Item>
		<Dropdown.Divider />
		<Dropdown.Item>Delete</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown.Root>
