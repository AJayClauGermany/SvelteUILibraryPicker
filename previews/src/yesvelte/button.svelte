<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet (yesvelte/css/tabler.min.css), which
  the install guide links from the layout; we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/button
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button } from 'yesvelte'
</script>

<Button color="primary">Primary</Button>
<Button>Default</Button>
<Button color="primary" outline>Outline</Button>
