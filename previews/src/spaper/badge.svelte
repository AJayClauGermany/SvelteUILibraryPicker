<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Tag
-->
<script lang="ts">
	import './styles.css'
	import { Tag } from 'spaper'
</script>

<Tag>Draft</Tag>
<Tag type="success">Published</Tag>
<Tag type="warning" rounded>Needs review</Tag>
