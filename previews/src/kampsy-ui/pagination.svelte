<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/pagination
-->
<script lang="ts">
	import './styles.css'
	import { Pagination } from 'kampsy-ui'
</script>

<Pagination
	previous={{ title: 'Getting started', href: '#getting-started' }}
	next={{ title: 'Configuration', href: '#configuration' }}
/>
