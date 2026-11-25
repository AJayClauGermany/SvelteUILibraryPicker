<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Carousel
-->
<script lang="ts">
	import './styles.css'
	import { Carousel, CarouselItem } from 'spaper'
</script>

<Carousel autoplay={false}>
	<CarouselItem><p>Slide one: sketch the idea.</p></CarouselItem>
	<CarouselItem><p>Slide two: build a rough version.</p></CarouselItem>
	<CarouselItem><p>Slide three: show it to someone.</p></CarouselItem>
</Carousel>
