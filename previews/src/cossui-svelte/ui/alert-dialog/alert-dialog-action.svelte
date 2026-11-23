<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import {
    type ButtonSize,
    type ButtonVariant,
    buttonVariants
  } from '../button/index.js';
  import { cn } from '../../utils.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'default',
    size = 'default',
    type = 'button',
    children,
    ...restProps
  }: HTMLButtonAttributes & {
    ref?: HTMLButtonElement | null;
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: Snippet;
  } = $props();
</script>

<button
  bind:this={ref}
  data-slot="alert-dialog-action"
  class={cn(buttonVariants({ size, variant }), className)}
  {type}
  {...restProps}
>
  {@render children?.()}
</button>
