<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The guide's base styles (see ./styles.css) also override the field's left padding, so the icon
  overlaps the placeholder, and in dark mode the field stays white.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/forms/search-input/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Search } from 'svelte-5-ui-lib'
</script>

<Search placeholder="Search products" />
