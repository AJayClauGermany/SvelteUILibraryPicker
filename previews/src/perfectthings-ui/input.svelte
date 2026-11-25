<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#InputText
-->
<script lang="ts">
	import { InputText } from '@perfectthings/ui'
</script>

<InputText label="Full name" placeholder="Ada Lovelace" />
<InputText label="Email" value="ada@" error="Enter a full email address" />
