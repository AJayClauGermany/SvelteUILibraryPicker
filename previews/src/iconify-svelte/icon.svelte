<!--
  Iconify's Icon component renders any icon set's SVG at 1em in currentColor, loading icon data
  on demand from the Iconify API, which is its default.
  Docs: https://iconify.design/docs/icon-components/svelte/
-->
<script lang="ts">
	import Icon from '@iconify/svelte'
</script>

<Icon icon="mdi:home" />
<Icon icon="mdi:magnify" />
<Icon icon="heroicons:bell" />
<Icon icon="tabler:settings" width="32" height="32" />
