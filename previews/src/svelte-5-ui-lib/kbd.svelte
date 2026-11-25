<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  `class={undefined}` only satisfies its typings, which mark `class` as required; it adds no class.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/kbd/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Kbd } from 'svelte-5-ui-lib'
</script>

<p>Press <Kbd class={undefined}>Ctrl</Kbd> + <Kbd class={undefined}>K</Kbd> to search.</p>
