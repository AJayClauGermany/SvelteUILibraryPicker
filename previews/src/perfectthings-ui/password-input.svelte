<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#InputPassword
-->
<script lang="ts">
	import { InputPassword } from '@perfectthings/ui'
</script>

<InputPassword label="Password" value="correct horse" />
