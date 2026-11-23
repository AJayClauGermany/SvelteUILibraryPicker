<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/UserAvatar
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { UserAvatar, UserAvatarGroup } from 'carbon-components-svelte'
</script>

<UserAvatar name="Ada Lovelace" />
<UserAvatar initials="GH" size="lg" backgroundColor="blue" />
<UserAvatar size="xl" />
<br /><br />
<UserAvatarGroup max={3}>
	<UserAvatar name="Ada Lovelace" />
	<UserAvatar name="Grace Hopper" backgroundColor="green" />
	<UserAvatar name="Alan Turing" backgroundColor="purple" />
	<UserAvatar name="Linus Torvalds" />
	<UserAvatar name="Margaret Hamilton" />
</UserAvatarGroup>
