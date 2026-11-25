<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#InfoBar
-->
<script lang="ts">
	import { InfoBar } from '@perfectthings/ui'
</script>

<InfoBar msg="A new version is available." />
<InfoBar type="success" msg="Your changes were saved." />
<InfoBar type="warning" msg="Your trial ends in 3 days." />
<InfoBar type="error" msg="The upload failed." />
