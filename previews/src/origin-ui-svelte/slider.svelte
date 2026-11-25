<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/sliders
-->
<script lang="ts">
	import './styles.css'
	import Slider from './ui/slider.svelte'
</script>

<div class="flex flex-col gap-6">
	<Slider type="single" value={40} />
	<Slider type="multiple" value={[20, 70]} showTooltip />
</div>
