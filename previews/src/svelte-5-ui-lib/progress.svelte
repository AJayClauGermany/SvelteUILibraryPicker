<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The progress bar is called Progressbar.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/progress/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Progressbar } from 'svelte-5-ui-lib'
</script>

<Progressbar progress="45" />
<br />
<Progressbar progress="70" color="green" labelOutside="Upload" />
