<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#text-area
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let bio = $state('')
</script>

<Form.InputLabel for="bio">Bio</Form.InputLabel>
<Form.TextArea bind:value={bio} id="bio" rows={3} placeholder="Tell us about yourself" />
