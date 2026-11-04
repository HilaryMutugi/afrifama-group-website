# Default error recovery and touch targets

## Confirmed current problems
1. `src/router.tsx` sets no `defaultErrorComponent` or `defaultNotFoundComponent`. Only the root route has them, so errors inside nested routes fall back to the generic root page.
2. The root `ErrorComponent` uses generic styling (not Afrifama headings), its buttons are about 36px high, and the root 404 "Go home" link is about 36px high.
3. Homepage slideshow (`src/components/site/HomePhotoSlideshow.tsx`): dot buttons are `size-8` (32px). The arrow and pause buttons use `controlClass`, whose size is checked during the build.
4. `src/components/site/EggJourney.tsx`: Previous, Next and pause controls are plain buttons styled by local CSS with no 44px minimum.

## Deferred
- Field Notes work (missing-slug 404, route-level recovery). Field Notes stay as placeholders for future writing, and their files are not touched.
- Full verification at desktop, tablet and mobile sizes waits until the broader layout work is complete.

## What will change
1. **Shared on-brand recovery state**
   - New `src/components/site/RouteStates.tsx` with `SiteErrorState` and `SiteNotFoundState`. Both use Manrope headings, semantic tokens, one H1, 44px Button-based actions and a visible focus ring. The error state puts focus on its heading so screen readers announce it.
   - Error copy: "This page didn't load" / "Something went wrong on our side. Try again, or return to the homepage." The page never shows technical error details. In development only, the error message appears in a collapsed details panel.
   - "Try again" runs `router.invalidate()` and then `reset()`.
   - The root `__root.tsx` error and not-found components reuse these, keeping their existing `reportLovableError` call and the noindex, nofollow meta. The 404 wording stays the same.
   - `src/router.tsx`: set `defaultErrorComponent` and `defaultNotFoundComponent` to the shared states.
2. **Touch targets of at least 44px (visual size unchanged)**
   - Slideshow dots: buttons go from `size-8` to `size-11`. The visible dot stays the same; spacing is adjusted with negative margins so the control row keeps its width. If `controlClass` is under 44px, it goes to `size-11`.
   - EggJourney controls: add `min-height/min-width: 44px` in the component's local CSS. The glyphs stay the same.
   - Run a quick sweep for visible links and buttons outside navigation and running text that are under 44px. Fix only compact standalone controls by adding `min-h-11 inline-flex items-center`. Field Notes are excluded. Inline links inside paragraphs are exempt (WCAG 2.5.8 inline exception). The handoff file will list the exemptions.
3. **Docs**: update `FINAL-HANDOFF.md` (touch-target and error-state status, with Field Notes and full viewport QA marked as deferred), `roadmap.md` (add the two deferred items), `UNIT-TRACKER.md`, `DECISIONS.md`, and add one rule to `AGENTS.md` (shared recovery states used as router defaults).

## Verification (narrow for now)
- Root 404 on `/random` and `/egg-supply-interest`: still 404, noindex, nofollow, with 44px recovery links.
- Error state: trigger it with a temporary throw in a scratch run (not saved). Check focus, buttons, that production mode shows no technical details, and that Try again recovers.
- Homepage slideshow and EggJourney at one desktop size: controls measure 44px or more, and before/after screenshots show no visible layout change.
- Keyboard: Tab through the slideshow and journey controls, check focus is visible, and Enter/Space work. With reduced motion on, rotation stays paused.
- Run scoped tests, scoped lint on the touched files and the preview build. Nothing is published.

## Decisions for Hilary
- Approve the error copy above. It replaces "on our end" with British "on our side".
- Confirm that inline links inside paragraphs can stay exempt from the 44px rule.
