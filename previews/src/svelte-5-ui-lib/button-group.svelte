<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/button-group/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, ButtonGroup } from 'svelte-5-ui-lib'
</script>

<ButtonGroup>
	<Button>Day</Button>
	<Button>Week</Button>
	<Button>Month</Button>
</ButtonGroup>
