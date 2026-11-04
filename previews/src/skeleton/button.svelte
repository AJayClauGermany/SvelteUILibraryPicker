<!--
  Skeleton has no Button component: buttons are Tailwind classes (`btn` + a preset) on a
  plain <button>, which IS its default. ./styles.css loads Skeleton's cerberus theme.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/buttons
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<button type="button" class="btn preset-filled">Filled</button>
<button type="button" class="btn preset-tonal">Tonal</button>
<button type="button" class="btn preset-outlined">Outlined</button>
