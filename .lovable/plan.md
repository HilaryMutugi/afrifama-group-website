# Field Notes 404, default error recovery and touch targets

## Confirmed current problems
1. `src/routes/field-notes.$slug.tsx` has no loader. An unknown slug renders an inline "Note not found" inside the component, so the server returns 200, not 404. Its head emits only `noindex` (no `nofollow`), and the recovery link is a plain text link under 44px.
2. `src/router.tsx` sets no `defaultErrorComponent` or `defaultNotFoundComponent`. Only the root route has them, so errors inside nested routes fall back to the generic root page.
3. The root `ErrorComponent` uses generic styling (not Afrifama headings), its buttons are about 36px high, and the root 404 "Go home" link is about 36px high.
4. Homepage slideshow (`src/components/site/HomePhotoSlideshow.tsx`): dot buttons are `size-8` (32px). The arrow and pause buttons use `controlClass`, whose size is checked during the build.
5. `src/components/site/EggJourney.tsx`: Previous, Next and pause controls are plain buttons styled by local CSS with no 44px minimum.

## What will change
1. **Missing Field Note returns a real 404**
   - Add a `loader` that looks up the slug in `fieldNotes` and `throw notFound()` when missing; it returns only the slug.
   - Add a route `notFoundComponent` that keeps the current wording ("Note not found", "This field note doesn't exist or has been moved.") with a 44px "Back to Field Notes" link and a "Go home" link, plus `noindex, nofollow`.
   - Change the head fallback to `noindex, nofollow`. Sample-article rules (`fieldNotePublication`, no Article schema, no sitemap entry) stay exactly as they are.
   - Add a route `errorComponent` that uses the shared error state (step 2).
2. **Shared on-brand recovery state**
   - New `src/components/site/RouteStates.tsx` with `SiteErrorState` and `SiteNotFoundState`. Both use Manrope headings, semantic tokens, one H1, 44px Button-based actions and a visible focus ring. The error state puts focus on its heading so screen readers announce it.
   - Error copy: "This page didn't load" / "Something went wrong on our side. Try again, or return to the homepage." The page never shows technical error details. In development only, the error message appears in a collapsed details panel.
   - "Try again" runs `router.invalidate()` and then `reset()`.
   - The root `__root.tsx` error and not-found components reuse these, keeping their existing `reportLovableError` call and noindex meta.
   - `src/router.tsx`: set `defaultErrorComponent` and `defaultNotFoundComponent` to the shared states.
3. **Touch targets of at least 44px (visual size unchanged)**
   - Slideshow dots: buttons go from `size-8` to `size-11`. The visible dot stays the same; spacing is adjusted with negative margins so the control row keeps its width. If `controlClass` is under 44px, it goes to `size-11`.
   - EggJourney controls: add `min-height/min-width: 44px` in the component's local CSS. The glyphs stay the same.
   - Run a site-wide Playwright sweep for visible links and buttons outside navigation and running text that are under 44px. Fix only compact standalone controls (for example small "Read more" or "Back" links) by adding `min-h-11 inline-flex items-center`. Inline links inside paragraphs are exempt (WCAG 2.5.8 inline exception). The handoff file will list the exemptions.
4. **Docs**: update `FINAL-HANDOFF.md` (remove the touch-target follow-up, add the new 404/error evidence), `roadmap.md`, `UNIT-TRACKER.md`, `DECISIONS.md`, and replace one rule in `AGENTS.md` (route-level notFound plus shared recovery states).

## Tests
- Add a pure helper `findFieldNote(slug)` in `src/content/site.ts`, used by the loader and the head. Test it in `site.test.js`: a known slug returns the note, an unknown slug returns undefined, and sample restrictions still apply.

## Verification
- HTTP status: `/field-notes/<real-sample>` returns 200 with noindex, nofollow. `/field-notes/does-not-exist`, `/egg-supply-interest` and `/random` return 404 with noindex, nofollow and working recovery links.
- Error state: temporarily trigger it with a dev-only throw in a scratch run (not committed). Check focus, buttons, no technical details in production mode, and that Try again recovers.
- Playwright at 1440, 768 and 390 on all public routes. Check one H1, no overflow, no console errors, and that the targeted controls measure 44px or more. Compare screenshots of the homepage slideshow and EggJourney before and after to confirm no visible layout change.
- Keyboard: Tab through the slideshow and journey controls, check focus is visible, and Enter/Space work. With reduced motion on, rotation stays paused.
- Run scoped tests, scoped lint on the touched files and the preview build. Nothing is published.

## Decisions for Hilary
- Approve the error copy above. It replaces "on our end" with British "on our side".
- Confirm that inline links inside paragraphs can stay exempt from the 44px rule.
