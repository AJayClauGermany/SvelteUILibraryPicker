<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Tag
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { Tag } from 'carbon-components-svelte'
</script>

<Tag>Default</Tag>
<Tag type="blue">Blue</Tag>
<Tag type="green" filter>Filter</Tag>
