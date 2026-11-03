@AGENTS.md

## Claude Code notes

- For adding a library or a preview, follow the playbooks in `docs/playbooks/`.
- Use subagents to research several libraries in parallel: one library per agent, each writing
  only its own `src/lib/data/libraries/<id>.ts`.
- When a docs website is unreachable, shallow-clone the library repo (`git clone --depth 1`) and
  read the docs source. Most Svelte libraries keep their docs site in the same repo.
