<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/label
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Input, Label } from 'yesvelte'
</script>

<Label for="project-name" required>Project name</Label>
<Input id="project-name" />
