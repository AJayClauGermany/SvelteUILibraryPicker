<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/toast
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Toast } from '@winkintel/bootstrap-svelte'

	let shown = $state(false)
</script>

<Button colorVariant="primary" onclick={() => (shown = true)}>Save draft</Button>

<Toast.Container placement="bottom-end">
	<Toast.Root isShown={shown} onHide={() => (shown = false)}>
		<Toast.Header>
			<strong class="me-auto">Drafts</strong>
			<small>just now</small>
		</Toast.Header>
		<Toast.Body>Your draft was saved.</Toast.Body>
	</Toast.Root>
</Toast.Container>
