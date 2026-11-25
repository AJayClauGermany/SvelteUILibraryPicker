<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/el/grid
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Card, CardBody, El } from 'yesvelte'
</script>

<!-- The grid itself is invisible, so each column holds a Card to show where it sits. -->
<El container>
	<El row>
		<El col><Card><CardBody>One of three</CardBody></Card></El>
		<El col><Card><CardBody>Two of three</CardBody></Card></El>
		<El col><Card><CardBody>Three of three</CardBody></Card></El>
	</El>
	<El row mt="3">
		<El col="8"><Card><CardBody>Eight columns</CardBody></Card></El>
		<El col="4"><Card><CardBody>Four</CardBody></Card></El>
	</El>
</El>
