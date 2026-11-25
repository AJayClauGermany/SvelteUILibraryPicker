<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/markdown
-->
<script lang="ts">
	import './styles.css'
	import { Markdown } from '@sivir-ui/svelte/components/markdown'

	const content = `## Release notes

The **sync** job now retries twice before it gives up.

- Faster startup
- Fewer \`timeout\` errors

| Plan | Seats |
| --- | --- |
| Team | 10 |
| Business | 50 |`
</script>

<Markdown {content} />
