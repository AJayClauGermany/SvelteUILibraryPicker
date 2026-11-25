<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/el/typography
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { El } from 'yesvelte'
</script>

<!-- Typography is the generic El component with a `tag` and text props. -->
<El tag="h2">Release notes</El>
<El tag="p">
	Version 2 adds <El tag="strong">dark mode</El> and <El tag="mark">faster</El> builds. Press
	<El tag="kbd">Ctrl</El> + <El tag="kbd">S</El> to save.
</El>
<El tag="p" textMuted>Published last week.</El>
