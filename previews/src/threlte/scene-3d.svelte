<!--
  Threlte ships no styling: <Canvas> sets up a Three.js renderer on a transparent background, and
  everything you see comes from the Three.js objects declared below (geometry, material, lights).
  The canvas fills its parent, so the parent gets a height. No CSS, textures or models are loaded.
  Docs: https://threlte.xyz/docs/reference/core/canvas/
-->
<script lang="ts">
	import { Canvas, T } from '@threlte/core'
</script>

<div style="height: 240px">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[3, 2.5, 4]} oncreate={ref => ref.lookAt(0, 0, 0)} />
		<T.AmbientLight intensity={0.4} />
		<T.DirectionalLight position={[4, 6, 3]} intensity={2} />

		<T.Mesh rotation.y={0.5}>
			<T.BoxGeometry args={[1.5, 1.5, 1.5]} />
			<T.MeshStandardMaterial color="#4f86c6" />
		</T.Mesh>
		<T.Mesh position={[0, -0.76, 0]} rotation.x={-Math.PI / 2}>
			<T.CircleGeometry args={[2.5, 48]} />
			<T.MeshStandardMaterial color="#c8c8c8" />
		</T.Mesh>
	</Canvas>
</div>
