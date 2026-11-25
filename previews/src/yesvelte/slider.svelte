<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/slider
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Slider, SliderKnob } from 'yesvelte'
</script>

<Slider>
	<SliderKnob value={40} />
</Slider>
<br />
<Slider>
	<SliderKnob value={20} connect />
	<SliderKnob value={70} />
</Slider>
