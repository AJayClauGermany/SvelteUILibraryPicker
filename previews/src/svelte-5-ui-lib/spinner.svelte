<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/spinner/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Spinner } from 'svelte-5-ui-lib'
</script>

<Spinner />
<Spinner color="green" />
<Spinner size="12" />
