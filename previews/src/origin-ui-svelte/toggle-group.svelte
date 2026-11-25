<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/buttons/button-30
-->
<script lang="ts">
	import './styles.css'
	import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group/index.js'
</script>

<ToggleGroup type="single" value="week" variant="outline">
	<ToggleGroupItem value="day">Day</ToggleGroupItem>
	<ToggleGroupItem value="week">Week</ToggleGroupItem>
	<ToggleGroupItem value="month">Month</ToggleGroupItem>
</ToggleGroup>
