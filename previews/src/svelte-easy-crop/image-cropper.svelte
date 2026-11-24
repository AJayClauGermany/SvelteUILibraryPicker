<!--
  svelte-easy-crop ships its own cropper styles (overlay, crop frame, grid). The cropper fills its
  parent, so the parent gets the size and relative position the README asks for. The image is an
  inline SVG so nothing is fetched.
  Docs: https://github.com/ValentinH/svelte-easy-crop#readme
-->
<script lang="ts">
	import Cropper from 'svelte-easy-crop'

	const image = `data:image/svg+xml,${encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="#7aa6c2"/><circle cx="420" cy="140" r="70" fill="#f2c94c"/><path d="M0 400 L200 180 L360 330 L460 240 L600 400 Z" fill="#3d6b4f"/></svg>',
	)}`
	let crop = $state({ x: 0, y: 0 })
	let zoom = $state(1)
</script>

<div style="position: relative; height: 260px">
	<Cropper {image} bind:crop bind:zoom aspect={1} />
</div>
