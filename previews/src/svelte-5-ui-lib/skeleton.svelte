<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Svelte 5 UI Lib ships several placeholder presets; a few are shown here.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/skeleton/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { ImagePlaceholder, Skeleton, TestimonialPlaceholder } from 'svelte-5-ui-lib'
</script>

<Skeleton />
<br />
<TestimonialPlaceholder />
<br />
<ImagePlaceholder />
