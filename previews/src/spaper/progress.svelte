<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Progress
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from 'spaper'
</script>

<Progress value={35} />
<Progress value={70} type="success" showValue />
<Progress value={50} type="secondary" striped />
