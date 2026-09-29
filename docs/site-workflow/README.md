# Afrifama Site Workspace

This folder holds the working files for improving the Afrifama group website, one unit at a time.

| File | What it is |
|------|------------|
| MASTER-PROMPT.md | The prompt to paste at the start of every session |
| STORY-BIBLE.md | The story, audiences, proof and voice. Fill in every OPEN item first. |
| UNIT-TRACKER.md | The order of work and the status of each unit |
| DECISIONS.md | A log of choices so we never argue the same point twice |

## How to use it

1. Put MASTER-PROMPT.md, STORY-BIBLE.md, UNIT-TRACKER.md and DECISIONS.md in the repository under `docs/site-workflow/`. Put CLAUDE.md in the repository root. CLAUDE.md loads the repo rules and the master prompt automatically at the start of every Claude Code session, so you do not need to paste the prompt.
2. Run the placeholder cleanup first (Unit 0a).
3. Fill in the OPEN items in STORY-BIBLE.md. Twenty minutes here saves hours of rewrites.
4. Start a session, paste MASTER-PROMPT.md, and add: "Today's unit: <name from the tracker>".
5. Approve one of the options Claude proposes, then let it build on a branch.
6. Check the preview, then merge. Claude updates the tracker and decisions log.

## Which model for which job

- Story Bible, design system audit and the diagnosis and options step of each unit: use the strongest model you have access to.
- Building, editing pages, fixing lint and build errors, checking responsive layouts: use Sonnet 5.5.
- Small text and copy tweaks after a unit is done: Sonnet 5.5 or Haiku 4.5.
