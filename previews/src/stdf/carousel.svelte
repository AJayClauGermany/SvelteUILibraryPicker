<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The slides are inline SVG data: URIs, so nothing is fetched from another host.
  Docs: https://stdf.dev/components?nav=swiper&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Swiper } from 'stdf'

	const svg = (fill: string, label: string) =>
		'data:image/svg+xml,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="800" height="450" fill="${fill}"/><text x="400" y="245" font-family="sans-serif" font-size="64" fill="#fff" text-anchor="middle">${label}</text></svg>`,
		)
</script>

<Swiper
	data={[
		{ type: 'img', url: svg('#4f7cac', 'One') },
		{ type: 'img', url: svg('#6a994e', 'Two') },
		{ type: 'img', url: svg('#bc6c25', 'Three') },
	]}
/>
