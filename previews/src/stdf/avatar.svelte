<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The image is an inline SVG data: URI, so nothing is fetched from another host.
  Docs: https://stdf.dev/components?nav=avatar&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Avatar } from 'stdf'

	const image =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#6a994e"/><circle cx="48" cy="38" r="18" fill="#fff"/><rect x="18" y="62" width="60" height="34" rx="17" fill="#fff"/></svg>',
		)
</script>

<Avatar {image} />
<Avatar alt="AL" />
