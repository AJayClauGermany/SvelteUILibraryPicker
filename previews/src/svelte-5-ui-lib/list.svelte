<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The list group is called Listgroup in Svelte 5 UI Lib.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/list-group/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Listgroup } from 'svelte-5-ui-lib'
</script>

<Listgroup items={['Profile', 'Settings', 'Messages', 'Downloads']} />
