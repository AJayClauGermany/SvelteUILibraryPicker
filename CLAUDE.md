@AGENTS.md

## Claude Code notes

- Project skills in `.claude/skills/` (add-library, add-tool, add-preview, add-props,
  review-change, maintain) wrap the playbooks in `docs/playbooks/`. Use them for those tasks.
- Use subagents to research several libraries in parallel: one library per agent, each writing
  only its own `src/lib/data/libraries/<id>.ts` (or `tools/<id>.ts`). Keep each library on its own
  branch and PR unless the user asks otherwise.
- When a docs website is unreachable, shallow-clone the library repo (`git clone --depth 1`) and
  read the docs source. Most Svelte libraries keep their docs site in the same repo.
