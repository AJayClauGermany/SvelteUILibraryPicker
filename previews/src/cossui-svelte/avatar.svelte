<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/avatar
-->
<script lang="ts">
	import './styles.css'
	import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from './ui/avatar/index.ts'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#64748b"/><circle cx="24" cy="19" r="9" fill="#e2e8f0"/><rect x="10" y="32" width="28" height="16" rx="8" fill="#e2e8f0"/></svg>',
		)
</script>

<Avatar>
	<AvatarImage src={photo} alt="Jane Doe" />
	<AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar>
	<AvatarFallback>AM</AvatarFallback>
</Avatar>

<AvatarGroup>
	<Avatar><AvatarImage src={photo} alt="Jane Doe" /><AvatarFallback>JD</AvatarFallback></Avatar>
	<Avatar><AvatarFallback>AM</AvatarFallback></Avatar>
	<Avatar><AvatarFallback>SR</AvatarFallback></Avatar>
	<AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>
