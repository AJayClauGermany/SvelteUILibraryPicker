<!--
  MapLibre GL's own stylesheet (svelte-maplibre imports it) and standard controls, unchanged. The map
  style is ours by necessity (a map has no default style): a plain background plus a few shapes,
  all inline so nothing is fetched. Without a class the map fills its parent, so the parent gets a
  height and relative position.
  Docs: https://svelte-maplibre.imfeld.dev/docs
-->
<script module lang="ts">
	// The README's Vite setup: point MapLibre GL v6 at its worker before the first map is created.
	import * as maplibregl from 'maplibre-gl'
	import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

	maplibregl.setWorkerUrl(maplibreWorkerUrl)
</script>

<script lang="ts">
	import { FillLayer, GeoJSON, LineLayer, MapLibre } from 'svelte-maplibre'

	const style: maplibregl.StyleSpecification = {
		version: 8,
		sources: {},
		layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#eef0e6' } }],
	}

	const area: GeoJSON.Feature = {
		type: 'Feature',
		properties: {},
		geometry: { type: 'Polygon', coordinates: [[[-6, -3], [4, -5], [7, 4], [-4, 6], [-6, -3]]] },
	}
	const route: GeoJSON.Feature = {
		type: 'Feature',
		properties: {},
		geometry: { type: 'LineString', coordinates: [[-10, 6], [0, 0], [10, -6]] },
	}
</script>

<div style="position: relative; height: 240px">
	<MapLibre {style} center={[0, 0]} zoom={3} standardControls>
		<GeoJSON data={area}>
			<FillLayer paint={{ 'fill-color': '#6a9fb5', 'fill-opacity': 0.6 }} />
		</GeoJSON>
		<GeoJSON data={route}>
			<LineLayer paint={{ 'line-color': '#c0504d', 'line-width': 3 }} />
		</GeoJSON>
	</MapLibre>
</div>
