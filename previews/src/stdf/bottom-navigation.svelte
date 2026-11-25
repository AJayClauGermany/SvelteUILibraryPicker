<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Text-only labels: tab icons would need an SVG sprite or the Iconify plugin (see the Icon guide).
  Docs: https://stdf.dev/components?nav=tabBar&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { TabBar } from 'stdf'
</script>

<TabBar labels={[{ text: 'Home' }, { text: 'Search' }, { text: 'Inbox' }, { text: 'Profile' }]} />
