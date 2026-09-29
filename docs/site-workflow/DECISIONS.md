# Decisions Log

One line per decision, newest at the bottom. Claude adds to this at the end of every unit.

| Date | Unit | Decision | Why |
|------|------|----------|-----|
| 2026-09-29 | Global | The site uses labelled image placeholders only. No real or stock photos until Afrifama photography exists. | Avoid borrowed imagery and licence obligations. Keep layout ready for real photos. |
| 2026-09-29 | Global | Content and claims live in src/content/site.ts. | One editable source, no layout edits needed for copy changes. |
| 2026-09-29 | Global | Git history is never rewritten. | The repo is also connected to Lovable. |
| 2026-09-29 | 0a | Placeholders carry no caption, since they already say "Photo placeholder". The one exception is Genetics, whose caption states that no hatchery exists yet; its wording lives in geneticsCapability.photoCaption. | Captions about photos that do not exist add noise; the genetics line is an honesty statement, not a photo note. |
| 2026-09-29 | 0a | The 12 Afrifama photos stay out of this public repo. They are backed up outside it and blocked via .git/info/exclude. | Anything committed to a public repo stays in history for good. |
| 2026-09-29 | 0a | No repo-wide formatter runs inside page units. Lint and line endings get their own unit. | Keeps each unit's diff small and reviewable. |
