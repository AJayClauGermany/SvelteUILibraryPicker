<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The file input is called Fileupload; Dropzone is a second component on the same page.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/file-input/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Fileupload, Label } from 'svelte-5-ui-lib'
</script>

<Label for="file">Upload file</Label>
<Fileupload id="file" />
