<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/carousel
-->
<script lang="ts">
	import * as carousel from '@zag-js/carousel'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const slides = ['Slide one', 'Slide two', 'Slide three']

	const id = $props.id()
	const service = useMachine(carousel.machine, { id, slideCount: slides.length })
	const api = $derived(carousel.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getControlProps()}>
		<button {...api.getPrevTriggerProps()}>Previous</button>
		<button {...api.getNextTriggerProps()}>Next</button>
	</div>
	<div {...api.getItemGroupProps()}>
		{#each slides as slide, index (slide)}
			<div {...api.getItemProps({ index })}>{slide}</div>
		{/each}
	</div>
	<div {...api.getIndicatorGroupProps()}>
		{#each api.pageSnapPoints as _, index (index)}
			<button {...api.getIndicatorProps({ index })} aria-label="Go to slide {index + 1}"></button>
		{/each}
	</div>
</div>
