<!--
  Neodrag is a headless action: it makes any element draggable and adds no styles.
  Docs: https://www.neodrag.dev/docs/svelte
-->
<script lang="ts">
	import { draggable } from '@neodrag/svelte'
</script>

<div use:draggable={{ bounds: 'parent' }}>Drag me around</div>
<div use:draggable={{ axis: 'x', bounds: 'parent' }}>I only move sideways</div>
