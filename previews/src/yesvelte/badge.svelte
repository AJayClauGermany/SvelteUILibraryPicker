<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/badge
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Badge } from 'yesvelte'
</script>

<Badge color="primary">New</Badge>
<Badge color="success" outline>Active</Badge>
<Badge color="danger" ghost>Overdue</Badge>
<Badge color="secondary" pill>12</Badge>
