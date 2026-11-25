<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Button
-->
<script lang="ts">
	import { Button } from '@perfectthings/ui'
</script>

<Button>Default</Button>
<Button info>Info</Button>
<Button success>Save</Button>
<Button danger outline>Delete</Button>
<Button text>Cancel</Button>
