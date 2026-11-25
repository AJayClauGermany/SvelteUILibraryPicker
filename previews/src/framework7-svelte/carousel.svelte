<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: Swiper Element (swiper-container), which Framework7 registers itself.
  Swipe or drag the cards.
  Docs: https://framework7.io/svelte/swiper.html
-->
<script lang="ts">
	import { Card } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<swiper-container pagination="true">
		<swiper-slide>
			<Card title="Slide 1" content="Swipe to see the next card." />
		</swiper-slide>
		<swiper-slide>
			<Card title="Slide 2" content="The dots below show where you are." />
		</swiper-slide>
		<swiper-slide>
			<Card title="Slide 3" content="This is the last card." />
		</swiper-slide>
	</swiper-container>
</F7App>
