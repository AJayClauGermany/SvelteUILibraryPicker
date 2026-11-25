<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Button
-->
<script lang="ts">
	import './styles.css'
	import { Button } from 'spaper'
</script>

<Button>Default</Button>
<Button type="primary">Primary</Button>
<Button outline="secondary">Outline</Button>
<Button loading>Saving</Button>
