<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/InlineNotification
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { InlineNotification } from 'carbon-components-svelte'
</script>

<InlineNotification kind="success" title="Saved." subtitle="Your changes are live." />
<InlineNotification kind="error" title="Upload failed." subtitle="The file is too large." />
