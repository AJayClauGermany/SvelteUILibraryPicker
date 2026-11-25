<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/segmented.html
-->
<script lang="ts">
	import { Block, Button, Segmented } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Segmented>
			<Button>Copy</Button>
			<Button>Move</Button>
			<Button>Delete</Button>
		</Segmented>
	</Block>
	<Block>
		<Segmented raised>
			<Button>Copy</Button>
			<Button>Move</Button>
			<Button>Delete</Button>
		</Segmented>
	</Block>
	<Block>
		<Segmented round>
			<Button outline>Copy</Button>
			<Button outline>Move</Button>
			<Button outline>Delete</Button>
		</Segmented>
	</Block>
</F7App>
