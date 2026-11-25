<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/shortcut
-->
<script lang="ts">
	import './styles.css'
	import { Button } from '@sivir-ui/svelte/components/button'
	import Shortcut from '@sivir-ui/svelte/components/shortcut'

	let count = $state(0)
</script>

<!-- While mounted, the Shortcut listens for its keys and clicks the button it sits in. -->
<Button variant="outline" onclick={() => count++}>
	Add note <Shortcut shortcut="shift+N" />
</Button>
<p>Shift+N clicks it too. Notes added: {count}</p>
