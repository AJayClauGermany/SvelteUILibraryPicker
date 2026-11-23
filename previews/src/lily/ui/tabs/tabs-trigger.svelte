<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '../../utils.js';
	import { getTabsPresentation } from './context.js';
	const presentation = getTabsPresentation();

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	data-slot="tabs-trigger"
	class={cn(
		presentation.variant === 'segmented'
			? 'inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-sm tracking-[-0.39px] whitespace-nowrap text-(--text)/56 transition-colors duration-150 outline-none hover:text-(--text) disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-(--bg-elevated) data-[state=active]:font-medium data-[state=active]:text-(--text) data-[state=active]:shadow-sm'
			: 'inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-sm tracking-[-0.39px] whitespace-nowrap text-(--text)/56 transition-colors duration-150 outline-none hover:text-(--text) disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-(--bg-elevated) data-[state=active]:font-medium data-[state=active]:text-(--text) data-[state=active]:shadow-sm',
		presentation.variant === 'segmented' &&
			presentation.size === 'lg' &&
			'px-5 py-2 text-base',
		className
	)}
	{...restProps}
/>
