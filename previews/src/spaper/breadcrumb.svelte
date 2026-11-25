<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Breadcrumb
-->
<script lang="ts">
	import './styles.css'
	import { Breadcrumb } from 'spaper'
</script>

<Breadcrumb
	items={[
		{ text: 'Home', href: '#' },
		{ text: 'Projects', href: '#' },
		{ text: 'Garden planner' },
	]}
/>
