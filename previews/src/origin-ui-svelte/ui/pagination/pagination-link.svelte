<script module lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import { type ButtonProps, buttonVariants } from '../button.svelte';

	export type Props = WithElementRef<HTMLAnchorAttributes> & {
		children: Snippet;
		isActive?: boolean;
		isDisabled?: boolean;
	} & Pick<ButtonProps, 'size'>;
</script>

<script lang="ts">
	import { cn } from '../../utils.js';

	let {
		children,
		class: className,
		isActive = false,
		ref = $bindable(null),
		size = 'icon',
		...restProps
	}: Props = $props();
</script>

<a
	aria-current={isActive ? 'page' : undefined}
	class={cn(
		buttonVariants({
			size,
			variant: isActive ? 'outline' : 'ghost'
		}),
		className
	)}
	{...restProps}
>
	{@render children()}
</a>
