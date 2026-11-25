<script lang="ts">
	import { cn } from '../../utils.js';
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';

	let {
		class: className,
		ref = $bindable(null),
		...restProps
	}: NavigationMenuPrimitive.ItemProps = $props();
</script>

<NavigationMenuPrimitive.Item
	bind:ref
	data-slot="navigation-menu-item"
	class={cn('relative', className)}
	{...restProps}
/>
