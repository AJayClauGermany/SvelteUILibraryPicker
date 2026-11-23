<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#file-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'
</script>

<Form.InputLabel for="avatar">Profile picture</Form.InputLabel>
<Form.FileInput id="avatar" accept="image/png, image/jpeg" />
