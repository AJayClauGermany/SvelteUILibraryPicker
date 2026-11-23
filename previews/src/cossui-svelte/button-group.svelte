<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/group
-->
<script lang="ts">
	import './styles.css'
	import { Button } from './ui/button/index.ts'
	import { Group, GroupSeparator, GroupText } from './ui/group/index.ts'
	import { Input } from './ui/input/index.ts'
</script>

<Group aria-label="Text alignment">
	<Button variant="outline">Left</Button>
	<GroupSeparator />
	<Button variant="outline">Center</Button>
	<GroupSeparator />
	<Button variant="outline">Right</Button>
</Group>

<Group aria-label="Website">
	<GroupText>https://</GroupText>
	<GroupSeparator />
	<Input placeholder="example.com" />
</Group>
