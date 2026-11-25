<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Alert
-->
<script lang="ts">
	import './styles.css'
	import { Alert } from 'spaper'
</script>

<Alert>Your draft was saved.</Alert>
<Alert type="success">Invitation sent.</Alert>
<Alert type="danger" dismissible>The upload failed. Try again.</Alert>
