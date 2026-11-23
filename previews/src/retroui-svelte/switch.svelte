<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/switch
-->
<script lang="ts">
	import './styles.css'
	import { Label } from './ui/label/index.js'
	import { Switch } from './ui/switch/index.js'
</script>

<div class="flex items-center space-x-2">
	<Switch id="notifications" checked />
	<Label for="notifications">Notifications</Label>
</div>
<div class="mt-4 flex items-center space-x-2">
	<Switch id="beta" disabled />
	<Label for="beta">Beta features</Label>
</div>
