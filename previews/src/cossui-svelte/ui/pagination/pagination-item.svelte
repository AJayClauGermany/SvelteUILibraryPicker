<script lang="ts">
  import type { HTMLLiAttributes } from 'svelte/elements';
  import type { WithElementRef } from '../../utils.js';

  let {
    children,
    ref = $bindable(null),
    ...restProps
  }: WithElementRef<HTMLLiAttributes> = $props();
</script>

<li bind:this={ref} data-slot="pagination-item" {...restProps}>
  {@render children?.()}
</li>
