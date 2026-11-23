<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/toolbar
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Link, Toolbar, ToolbarPane } from 'konsta/svelte'
</script>

<App>
	<Toolbar top>
		<ToolbarPane>
			<Link>Back</Link>
			<Link>Share</Link>
		</ToolbarPane>
		<ToolbarPane>
			<Link>Edit</Link>
		</ToolbarPane>
	</Toolbar>
	<Block>
		<p>A toolbar holds a row of links or actions.</p>
	</Block>
</App>
