<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/alert
-->
<script lang="ts">
	import './styles.css'
	import { Alert, AlertDescription, AlertTitle } from './ui/alert/index.ts'
</script>

<Alert>
	<AlertTitle>Update available</AlertTitle>
	<AlertDescription>A new version is ready to install.</AlertDescription>
</Alert>
<Alert variant="success">
	<AlertTitle>Saved</AlertTitle>
	<AlertDescription>Your changes were stored.</AlertDescription>
</Alert>
<Alert variant="error">
	<AlertTitle>Upload failed</AlertTitle>
	<AlertDescription>The file is larger than 10 MB.</AlertDescription>
</Alert>
