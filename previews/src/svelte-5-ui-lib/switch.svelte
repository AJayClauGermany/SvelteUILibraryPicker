<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The switch is called Toggle.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/toggle/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Toggle } from 'svelte-5-ui-lib'
</script>

<Toggle checked>Notifications</Toggle>
<Toggle>Dark theme</Toggle>
<Toggle disabled>Disabled</Toggle>
