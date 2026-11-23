<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/snippet
-->
<script lang="ts">
	import './styles.css'
	import { CodeSnippet } from 'kampsy-ui'
</script>

<CodeSnippet text="pnpm add kampsy-ui" />
<CodeSnippet text={['cd my-app', 'pnpm dev']} />
<CodeSnippet type="inverted" prompt={false} text="git push origin main" />
