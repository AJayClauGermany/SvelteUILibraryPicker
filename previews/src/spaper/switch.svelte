<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Switch
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from 'spaper'

	let alerts = $state(true)
</script>

<Switch bind:checked={alerts}>Email alerts</Switch>
<Switch round>Weekly digest</Switch>
