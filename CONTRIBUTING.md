# Contributing

Thanks for helping. This site is a curated, secondary source: people use it to shortlist a
library and then go to the official docs. That only works if every fact is checked and every
change is easy to review, so we favour **small, focused contributions from people who have
checked their work themselves**.

## How we work

1. **Start from an issue.** Pick an open issue (look for `good first issue` and `help wanted`)
   or open one with a template first. Comment on it to say you're taking it. Typo and broken-link
   fixes can skip this step.
2. **One concern per PR.** One library or tool entry, one preview set (one library), one new
   component id, one bug fix or one page. If you find something else on the way, open an issue
   for it instead of adding it to your PR.
3. **Keep it reviewable.** `pnpm changes` summarises what your branch does to the data. If it
   lists more than one entry, split the PR. Small commits with clear messages
   (`Add Melt dialog preview`, `Fix Skeleton tabs docs link`) are easier to review than one large
   commit.
4. **Link your sources.** Every fact you add or change needs a source in the PR: npm, a file in
   the library's repo, or an official docs page. "Couldn't verify, left out" is a good outcome.
5. **Run the checks.** `pnpm verify` must pass before you ask for review.

A maintainer reviews against the [review checklist](docs/playbooks/review-change.md). You can run
the same checklist on your own PR before you open it.

### What we don't merge

- Bulk PRs that touch many entries at once (mass "updates", re-formatting, regenerated data).
  Maintainers run sweeping updates themselves from the weekly `data-health` issue.
- Facts without a primary source, guessed URLs, or text copied from a library's docs.
- Rankings, "best" claims or marketing language.
- Previews that restyle a library, or any generated content for a library whose `ai.status` is
  `restricted` or `unreviewed`.
- Drive-by refactors, dependency bumps or new dependencies that no issue asked for.
- PRs opened by an AI agent on its own, with no person who has read the diff and can answer
  review questions.

## Using AI tools

You may use AI tools to help, the same way you would use any other tool. You are still the
author, so:

- **Read every line** of the diff before you open the PR, and be able to explain it.
- **Check the facts yourself.** Open each docs link and source you are submitting. Agents can
  invent versions and URLs that look right. If you didn't check something, say so.
- **Say what the tool did** in the PR's "AI assistance" section (e.g. "drafted the entry, I
  checked every link and the npm facts").
- **Answer review comments yourself.** Don't paste agent replies.
- **Keep the scope small.** Agents make it easy to produce a lot at once; please don't. One entry
  per PR applies to agent-assisted work too.
- **Respect each library's rules.** No previews or generated content for `restricted` or
  `unreviewed` libraries, and if you contribute upstream to a library, follow its own policy
  (recorded as `ai.upstreamContributing` on its entry).

Agents should read [AGENTS.md](AGENTS.md), which has the same rules in agent-facing form and the
playbooks for each kind of change.

## Setup

```sh
pnpm install
pnpm dev        # http://localhost:5173
```

Node 22+ and pnpm 10. Before you open a PR:

```sh
pnpm verify     # data rules, type check, build
pnpm changes    # what your branch changes in the data, compared with main
```

## Common contributions

Each has a step-by-step playbook. They are written for people and agents alike.

| I want to... | Start here |
| --- | --- |
| Find something to do | Open issues, `pnpm status`, and the weekly `data-health` issue ([what each finding means](docs/maintaining.md)) |
| Fix or update one entry | `pnpm about <id>` prints its file and current facts. Change it, set `lastVerified` to today, run `pnpm validate`, and link the source in the PR. |
| Add a library | [docs/playbooks/add-library.md](docs/playbooks/add-library.md) (`pnpm new library <id> --package <npm>`) |
| Add a tool (charts, toasts, maps...) | [docs/playbooks/add-tool.md](docs/playbooks/add-tool.md) |
| Add live previews for a library | [docs/playbooks/add-preview.md](docs/playbooks/add-preview.md), background in [docs/previews.md](docs/previews.md) |
| Record component props | [docs/playbooks/add-props.md](docs/playbooks/add-props.md) |
| Add a component type | Add a generic kebab-case id with aliases to `src/lib/data/components.ts`, then map libraries to it (one library per follow-up PR is fine). Open an issue first. |
| Change the site | Pages are in `src/routes/`, shared UI in `src/lib/components/`. See [docs/architecture.md](docs/architecture.md). Open an issue first for anything beyond a small fix. |

Before changing how something works, check [docs/decisions.md](docs/decisions.md): it records
why the project does things the way it does, so settled questions don't have to be argued again.

## Library maintainers

If you maintain a listed library and want something corrected, changed or removed (including
previews or AI-related handling), open an issue with the "Maintainer request" template. These get
priority.

## Code of conduct

Be kind and assume good faith. We follow the
[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
