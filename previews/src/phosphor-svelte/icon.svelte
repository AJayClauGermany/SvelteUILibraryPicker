<!--
  Phosphor icons at their defaults: 1em, "regular" weight, filled with currentColor; the second row
  sets only the documented `weight` prop. No CSS to import and no styles of ours.
  Docs: https://github.com/haruaki07/phosphor-svelte#readme
-->
<script lang="ts">
	import HouseIcon from 'phosphor-svelte/lib/HouseIcon'
	import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon'
	import BellIcon from 'phosphor-svelte/lib/BellIcon'
	import GearIcon from 'phosphor-svelte/lib/GearIcon'
	import HeartIcon from 'phosphor-svelte/lib/HeartIcon'
	import TrashIcon from 'phosphor-svelte/lib/TrashIcon'
</script>

<p>
	<HouseIcon />
	<MagnifyingGlassIcon />
	<BellIcon />
	<GearIcon />
	<HeartIcon />
	<TrashIcon />
</p>

<p>
	<HeartIcon weight="thin" />
	<HeartIcon weight="light" />
	<HeartIcon weight="regular" />
	<HeartIcon weight="bold" />
	<HeartIcon weight="fill" />
	<HeartIcon weight="duotone" />
</p>
