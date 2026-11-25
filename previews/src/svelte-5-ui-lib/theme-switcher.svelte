<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Darkmode is a button that toggles the `dark` class on <html>.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/darkmode/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Darkmode } from 'svelte-5-ui-lib'
</script>

<Darkmode />
