<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/rating/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Rating } from 'svelte-5-ui-lib'
</script>

<Rating rating={4} />
<Rating rating={2.5} />
