---
name: review-change
description: Review a branch or pull request against this project's rules (scope, sources, own words, licenses, AI policy, default-styled previews). Use before opening a PR, or when asked to review someone's PR or a diff.
---

Follow [docs/playbooks/review-change.md](../../../docs/playbooks/review-change.md).

Start with `pnpm changes` (add a ref to compare with something other than `origin/main`): it lists
what the branch does to the data, with before and after values, so you can check each changed fact
against its source. Report blocking problems separately from suggestions, each with a file and line.
Don't push to someone else's branch or post review comments unless the user asked you to.
