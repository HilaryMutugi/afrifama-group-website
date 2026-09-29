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
| 2026-09-29 | 0f | The GitHub Pages concept preview (hilarymutugi.github.io/afrifama-group-website) now deploys from main on every push, including Lovable syncs. It keeps the preview banner, noindex and a robots.txt block. | One source of truth, and the preview always matches the placeholder-only site. The Codex homepage waits for Unit 12. |
| 2026-09-29 | 1 | The About page tells one emotional story from Hilary's approved copy: an unnamed, illustrative coastal farmer (never a testimonial, no photo), then who we are, who we serve, how we walk with them and why we exist. Afrifama is described only as an early-growth startup. No timeline, figures or Fama 1.0 on this page. | Lead with the farmer's problem and the startup's purpose, and use only approved facts. |
| 2026-09-29 | 1 | The homepage and footer carry a short About blurb (opening line plus the first scene paragraph) linking to /about. The footer blurb replaces the tagline; company.tagline stays for the site schema. | One consistent story entry point across the site. |
| 2026-09-29 | 12 (hero only) | The homepage hero presents Afrifama as an early-growth agribusiness startup, with copy, title and meta description in homeHero in site.ts. The hero headline uses a slightly smaller size than h1-page and the hero placeholder is capped at 26rem so both buttons sit above the fold at 1920x1080, 1366x768 and on 375 and 390 wide phones, including the preview banner. | Hilary asked for startup positioning and visible calls to action without scrolling. |
