<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/hover-card
-->
<script lang="ts">
	import { HoverCard } from '@ark-ui/svelte/hover-card'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<div>
	Made by
	<HoverCard.Root>
		<HoverCard.Trigger>
			{#snippet asChild(props)}
				<a href="#profile" {...props()}>@svelte-fan</a>
			{/snippet}
		</HoverCard.Trigger>
		<Portal>
			<HoverCard.Positioner>
				<HoverCard.Content>
					<strong>Svelte Fan</strong>
					<div>Writes about components and runes.</div>
				</HoverCard.Content>
			</HoverCard.Positioner>
		</Portal>
	</HoverCard.Root>
</div>
