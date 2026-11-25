<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/accordion.html
-->
<script lang="ts">
	import { AccordionContent, Block, List, ListItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<List accordionList>
		<ListItem accordionItem title="Shipping">
			<AccordionContent>
				<Block>
					<p>Orders leave the warehouse within two working days.</p>
				</Block>
			</AccordionContent>
		</ListItem>
		<ListItem accordionItem accordionItemOpened title="Returns">
			<AccordionContent>
				<Block>
					<p>Unused items can be sent back within 30 days.</p>
				</Block>
			</AccordionContent>
		</ListItem>
		<ListItem accordionItem title="Warranty">
			<AccordionContent>
				<Block>
					<p>Every device comes with a two-year warranty.</p>
				</Block>
			</AccordionContent>
		</ListItem>
	</List>
</F7App>
