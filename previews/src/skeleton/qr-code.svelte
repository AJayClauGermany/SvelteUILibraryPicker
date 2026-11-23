<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The SVG frame has no intrinsic size, so it gets one Tailwind size class, as the docs example does.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/qr-code
-->
<script lang="ts">
	import './styles.css'
	import { QrCode } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<QrCode value="https://example.com">
	<QrCode.Frame class="size-36">
		<QrCode.Pattern />
	</QrCode.Frame>
</QrCode>
