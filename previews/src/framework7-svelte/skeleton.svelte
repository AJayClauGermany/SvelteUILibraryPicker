<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  A List with the library's skeleton-text class (text turns into grey bars) plus SkeletonBlock
  placeholders; skeleton-effect-wave animates them.
  Docs: https://framework7.io/svelte/skeleton.html
-->
<script lang="ts">
	import { Block, List, ListItem, SkeletonBlock } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List mediaList class="skeleton-text skeleton-effect-wave">
		<ListItem title="Placeholder name" subtitle="Short line" text="A longer line of placeholder text">
			{#snippet media()}
				<SkeletonBlock width="40px" height="40px" borderRadius="50%" effect="wave" />
			{/snippet}
		</ListItem>
		<ListItem title="Another name" subtitle="Short line" text="Another line of placeholder text">
			{#snippet media()}
				<SkeletonBlock width="40px" height="40px" borderRadius="50%" effect="wave" />
			{/snippet}
		</ListItem>
	</List>
	<Block>
		<SkeletonBlock width="100%" height="80px" borderRadius="8px" effect="wave" />
	</Block>
</F7App>
