<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/progress
-->
<script lang="ts">
	import './styles.css'
	import {
		Progress,
		ProgressIndicator,
		ProgressLabel,
		ProgressTrack,
		ProgressValue,
	} from './ui/progress/index.ts'
</script>

<Progress value={72}>
	<div class="flex items-center justify-between gap-2">
		<ProgressLabel>Uploading photos</ProgressLabel>
		<ProgressValue />
	</div>
	<ProgressTrack>
		<ProgressIndicator />
	</ProgressTrack>
</Progress>
