<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/carousel
-->
<script lang="ts">
	import './styles.css'
	import * as Carousel from './ui/carousel/index.js'
	import * as Card from './ui/card/index.js'
</script>

<Carousel.Root class="mx-auto w-full max-w-xs">
	<Carousel.Content>
		{#each ['One', 'Two', 'Three', 'Four'] as slide (slide)}
			<Carousel.Item>
				<div class="p-1">
					<Card.Root>
						<Card.Content class="flex aspect-square items-center justify-center">
							<span class="text-3xl font-semibold">{slide}</span>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
