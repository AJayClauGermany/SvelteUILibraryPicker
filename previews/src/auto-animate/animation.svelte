<!--
  AutoAnimate ships no styles or markup: it only animates the direct children of the element it is
  attached to as they enter, leave or move, so plain browser-default checkboxes and a list are its
  default look. Ticking a task moves it to the end; "Hide finished tasks" removes and restores items.
  Docs: https://auto-animate.formkit.com/#usage-svelte
-->
<script lang="ts">
	import { autoAnimate } from '@formkit/auto-animate/svelte'

	let tasks = $state([
		{ id: 1, label: 'Water the plants', done: false },
		{ id: 2, label: 'Read a chapter', done: true },
		{ id: 3, label: 'Call a friend', done: false },
		{ id: 4, label: 'Tidy the desk', done: false },
	])
	let hideDone = $state(false)

	const shown = $derived(
		tasks.filter(task => !hideDone || !task.done).sort((a, b) => Number(a.done) - Number(b.done)),
	)
</script>

<label><input type="checkbox" bind:checked={hideDone} /> Hide finished tasks</label>
<ul {@attach autoAnimate}>
	{#each shown as task (task.id)}
		<li>
			<label>
				<input type="checkbox" checked={task.done} onchange={() => (task.done = !task.done)} />
				{task.label}
			</label>
		</li>
	{/each}
</ul>
