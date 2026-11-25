<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/checkbox/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from 'svelte-5-ui-lib'
</script>

<Checkbox checked>Email me about updates</Checkbox>
<Checkbox>Remember this device</Checkbox>
<Checkbox disabled>Disabled option</Checkbox>
