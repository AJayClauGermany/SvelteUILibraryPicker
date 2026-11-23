<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The items use Skeleton's own `card` class and surface colour, as the docs do.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/marquee
-->
<script lang="ts">
	import './styles.css'
	import { Marquee } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const words = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']
</script>

<Marquee autoFill pauseOnInteraction>
	<Marquee.Edge side="start" />
	<Marquee.Viewport>
		<Marquee.Context>
			{#snippet children(marquee)}
				{#each Array.from({ length: marquee().contentCount }) as _, index (index)}
					<Marquee.Content {index}>
						{#each words as word (word)}
							<span class="card bg-surface-100-900 px-4 py-2">{word}</span>
						{/each}
					</Marquee.Content>
				{/each}
			{/snippet}
		</Marquee.Context>
	</Marquee.Viewport>
	<Marquee.Edge side="end" />
</Marquee>
