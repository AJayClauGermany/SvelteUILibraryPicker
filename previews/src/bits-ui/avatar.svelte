<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/avatar
-->
<script lang="ts">
	import { Avatar } from 'bits-ui'

	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#888"/></svg>',
		)
</script>

<Avatar.Root>
	<Avatar.Image src={photo} alt="Ada Lovelace" />
	<Avatar.Fallback>AL</Avatar.Fallback>
</Avatar.Root>
<Avatar.Root>
	<Avatar.Fallback>GH</Avatar.Fallback>
</Avatar.Root>
