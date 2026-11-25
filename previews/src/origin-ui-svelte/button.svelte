<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/buttons
-->
<script lang="ts">
	import './styles.css'
	import Button from './ui/button.svelte'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Button>Default</Button>
	<Button variant="outline">Outline</Button>
	<Button variant="secondary">Secondary</Button>
	<Button variant="ghost">Ghost</Button>
	<Button variant="destructive">Destructive</Button>
	<Button variant="link">Link</Button>
	<Button disabled>Disabled</Button>
</div>
