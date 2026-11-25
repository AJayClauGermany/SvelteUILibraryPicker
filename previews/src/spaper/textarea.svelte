<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  A textarea is the Input component with type="textarea".
  Docs: https://oli8.github.io/spaper/components/Input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from 'spaper'
</script>

<Input type="textarea" label="Feedback" placeholder="What could be better?" />
