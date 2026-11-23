<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/kbd
-->
<script lang="ts">
	import './styles.css'
	import { Kbd, KbdGroup } from './ui/kbd/index.ts'
</script>

<p>Press <Kbd>Esc</Kbd> to close.</p>
<KbdGroup>
	<Kbd>⌘</Kbd>
	<Kbd>Shift</Kbd>
	<Kbd>P</Kbd>
</KbdGroup>
