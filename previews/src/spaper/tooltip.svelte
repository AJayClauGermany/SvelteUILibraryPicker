<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Spaper's Popover is a short hover label, so it fills the tooltip slot here.
  Docs: https://oli8.github.io/spaper/components/Popover
-->
<script lang="ts">
	import './styles.css'
	import { Button, Popover } from 'spaper'
</script>

<Popover label="Saved to your drafts" position="bottom" always>
	<Button>Save</Button>
</Popover>
<Popover label="Shown on hover" position="right">
	<Button outline="primary">Hover me</Button>
</Popover>
