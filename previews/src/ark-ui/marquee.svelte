<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look. The scrolling
  keyframes come from your own CSS, so the items sit still here.
  Docs: https://ark-ui.com/svelte/docs/components/marquee
-->
<script lang="ts">
	import { Marquee } from '@ark-ui/svelte/marquee'

	const items = ['Svelte', 'SvelteKit', 'Vite', 'Vitest']
</script>

<Marquee.Root>
	<Marquee.Viewport>
		<Marquee.Content>
			{#each items as item (item)}
				<Marquee.Item>{item}</Marquee.Item>
			{/each}
		</Marquee.Content>
	</Marquee.Viewport>
</Marquee.Root>
