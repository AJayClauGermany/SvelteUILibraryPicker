<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/badge/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Badge } from 'svelte-5-ui-lib'
</script>

<Badge>Default</Badge>
<Badge color="green">Green</Badge>
<Badge color="red">Red</Badge>
<Badge large>Large</Badge>
<Badge dismissable>Dismissable</Badge>
