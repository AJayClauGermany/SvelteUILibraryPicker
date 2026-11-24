<!--
  MapLibre GL's own stylesheet and controls, unchanged. The map style is ours by necessity (a map
  has no default style): a plain background plus a few shapes, all inline so nothing is fetched.
  Docs: https://svelte-maplibre-gl.mierune.dev/docs/quickstart
-->
<script lang="ts">
	import 'maplibre-gl/dist/maplibre-gl.css'
	// The quickstart's Vite setup: points MapLibre GL v6 at its worker.
	import 'svelte-maplibre-gl/vite'
	import type { StyleSpecification } from 'maplibre-gl'
	import { MapLibre, GeoJSONSource, FillLayer, LineLayer, NavigationControl } from 'svelte-maplibre-gl'

	const style: StyleSpecification = {
		version: 8,
		sources: {},
		layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#e8eef2' } }]
	}

	const shapes: GeoJSON.FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {},
				geometry: { type: 'Polygon', coordinates: [[[-8, -4], [2, -6], [6, 3], [-3, 7], [-8, -4]]] }
			},
			{
				type: 'Feature',
				properties: {},
				geometry: { type: 'LineString', coordinates: [[-10, 8], [0, 1], [9, -7]] }
			}
		]
	}
</script>

<!-- The map takes its container's size; without a height it would be zero pixels tall.
     The CSS is imported above, so the component's CDN stylesheet loader is turned off. -->
<MapLibre {style} center={[0, 0]} zoom={2.5} autoloadGlobalCss={false} inlineStyle="height: 240px">
	<NavigationControl />
	<GeoJSONSource data={shapes}>
		<FillLayer filter={['==', '$type', 'Polygon']} paint={{ 'fill-color': '#4a90a4', 'fill-opacity': 0.5 }} />
		<LineLayer filter={['==', '$type', 'LineString']} paint={{ 'line-color': '#c0504d', 'line-width': 3 }} />
	</GeoJSONSource>
</MapLibre>
