<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/alert/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Alert } from 'svelte-5-ui-lib'
</script>

<Alert>A new version is available.</Alert>
<br />
<Alert color="green">Your changes were saved.</Alert>
<br />
<Alert color="red" dismissable>Something went wrong.</Alert>
