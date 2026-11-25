<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#ButtonGroup
-->
<script lang="ts">
	import { Button, ButtonGroup } from '@perfectthings/ui'
</script>

<ButtonGroup>
	<Button>Back</Button>
	<Button>Today</Button>
	<Button>Next</Button>
</ButtonGroup>
