# Unit Tracker

Work one unit at a time, in this order. The order matters: the narrative is locked first, the detail pages follow, and the homepage comes last because it summarises everything else.

Status values: Not started, Diagnosing, Awaiting my choice, Building, Verifying, Done.

## Phase 0: Foundations

| # | Unit | Files | Status | Date | Notes |
|---|------|-------|--------|------|-------|
| 0a | Placeholder-only cleanup (remove leftover stock images, photos.ts, credits, stale captions) | src/content/photos.ts, src/assets, IMAGE_CREDITS.md, site.ts captions | Done | 2026-09-29 | Approved. Branch unit/placeholder-cleanup pushed with 3 commits, awaiting pull request and merge. Removed 33 unused image files and photos.ts, plus all stale captions; genetics caption moved to site.ts unchanged; IMAGE_CREDITS.md rewritten. Build passes. |
| 0b | Story Bible completed and approved | STORY-BIBLE.md | Not started | | I answer the open questions, Claude tightens the wording. |
| 0c | Design system audit: type scale, colour tokens, spacing, buttons, cards, section rhythm, placeholder styling | src/styles.css, src/components/site, src/components/ui | Not started | | Agree the rules once so each unit stays consistent. |
| 0d | Global chrome: header, footer, nav labels, skip link, error pages | src/routes/__root.tsx, SiteHeader, SiteFooter | Verifying | 2026-10-30 | Navigation-only pass complete: visible focus, exact current-page state, keyboard business disclosure, 44px mobile targets, existing Radix modal isolation and route-close focus, inverted dark-hero breadcrumbs, focused skip link. Desktop/tablet/390px checks and scoped tests pass. Footer, labels, content, metadata and deployment unchanged; remaining chrome work is outside this pass. |
| 0f | Preview deploys from main | .github/workflows/pages-preview.yml, vite.config.ts, src/router.tsx, src/routes/__root.tsx | Done | 2026-09-29 | GitHub Pages concept preview now builds from main instead of codex/homepage-rebuild. Banner, noindex and robots.txt block kept. Normal Lovable build unchanged. First deployment from main (run 36555568315, merge 8cdc134) succeeded; live preview checked and placeholder-only. |

## Phase 1: Narrative anchors

| # | Unit | Files | Status | Date | Notes |
|---|------|-------|--------|------|-------|
| 1 | About Afrifama | src/routes/about.tsx, aboutStory in site.ts | Verifying | 2026-09-29 | Rewritten to Hilary's approved emotional copy (opening line, illustrative farmer scene, four sections, partnership cards, Partner With Us to /contact). Old timeline, figures, mission and mural removed from the page. All four image slots kept. Short About blurb added to homepage and footer with a "Read our story" link. Build passes; checked at 1440, 768 and 390 with no overflow. Branch unit/about-afrifama, not pushed. |
| 2 | Our Businesses (hub) | src/routes/businesses.tsx, pillars in site.ts | Not started | | Must explain how the units connect as one system. |

## Phase 2: Business units

| # | Unit | Files | Status | Date | Notes |
|---|------|-------|--------|------|-------|
| 3 | Poultry | src/routes/poultry.tsx | Not started | | |
| 4 | Feeds | src/routes/feeds.tsx, feedsPage, feedProducts | Not started | | |
| 5 | Genetics and Hatchery | src/routes/genetics-hatchery.tsx, geneticsCapability | Not started | | In development, so honesty about stage matters most here. |
| 6 | Farmer Partnership | src/routes/farmer-partnership.tsx, farmerPartnership | Not started | | Form is currently unavailable. Decide the interim action. |
| 7 | Impact | src/routes/impact.tsx, impactFramework, earlyProgress | Not started | | Every number must be verifiable. |

## Phase 3: Supporting pages

| # | Unit | Files | Status | Date | Notes |
|---|------|-------|--------|------|-------|
| 8 | Field Notes (index and article template) | src/routes/field-notes.* , fieldNotes | Not started | | Content engine for SEO and trust. |
| 9 | FAQs | src/routes/faqs.tsx, faqGroups | Not started | | |
| 10 | Contact and enquiry routes | src/routes/contact.tsx, contactPage and enquiryRoutes in site.ts | Done | 2026-10-29 | Removed inactive form, toast and submission state. Six audiences retained, four real information links, Supplier and General explicitly unavailable. Status and location visible. Seven routing tests, scoped lint and preview build pass. Desktop, tablet and 390px phone verified with no overflow or console errors. No backend or publishing changes. |
| 11 | Privacy and Terms | src/routes/privacy.tsx, terms.tsx | Not started | | Light review only, then get a professional check. |

## Phase 4: Homepage and finish

| # | Unit | Files | Status | Date | Notes |
|---|------|-------|--------|------|-------|
| 12 | Homepage | src/routes/index.tsx | Not started | | Written last, so it can tell the whole story in one scroll. The Codex homepage redesign (index.tsx, homepage.css, homepageStory in site.ts, homepage-only footer) is kept on origin/codex/homepage-rebuild for review here. Its award claims (Givaudan Start-Up Competition 2024 winner; WIDU / GIZ 2023 first runner-up, Coastal Region) must be confirmed by Hilary before use. Its copy has em dashes that need fixing. |
| 13 | SEO, sitemap, social previews, performance and accessibility sweep | public/sitemap.xml, robots.txt, route head data | Verifying | 2026-10-31 | Narrow consistency pass: enquiry FAQs, policies and CTA/pathways now informational; early-growth Kilifi Organization schema serves Kenya only. Article OG URL/title fixed; explicit leaf social defaults added; sample Field Notes metadata qualified. Existing canonical/sitemap/robots and font display=swap preserved. Fourteen tests, scoped lint, sixteen public metadata/link checks and seven desktop/390px page checks pass. No redesign or deployment. Hosted preview noindex and bundle-size comparison remain unverified. |
| 14 | Final QA at 1440, 768 and 390 pixels, then handover notes | whole site | Not started | | |

## Parking Lot

Problems found while working on another unit. Do not fix them out of order.

- **FAQ delivery claims resolved, 2026-10-31.** Feed, genetics, supplier, investor and farmer FAQs match unavailable online collection; FAQ lead, page closing actions, shared pathways and draft policies no longer promise delivery through Contact. (Found in 10, resolved in 13.)

- **Future unit: lint and line endings.** `npm run lint` reports about 9,460 errors, nearly all Prettier. Best guess at the cause: this Windows checkout has `core.autocrlf=true`, so files arrive with Windows (CRLF) line endings while Prettier expects LF, and some files were also never formatted. Smallest safe fix: add a `.gitattributes` with `* text=auto eol=lf`, then in a separate commit run Prettier once on the whole repo, reviewed on its own so no content change hides in it. Do not mix it with page work. (Found in 0a.)
- **Em dashes in copy.** Site title in `src/routes/__root.tsx` ("Afrifama — …", fix in unit 13, global SEO). `aboutStory.closing` in site.ts (fixed in unit 1, copy replaced). `impactFramework.supportingCopy` in site.ts ("participation—it follows", fix in unit 7, Impact). (Found in 0a.)
- **Home hero slot not in imageSlots.** `src/routes/index.tsx` uses a hard-coded `slot="home-hero"` instead of a named slot in `imageSlots`. Fix in unit 12, Homepage. (Found in 0a.)
- **codex/homepage-rebuild branch.** Has a local commit (b778bd8, not pushed) whose pages import the 12 untracked photos in `src/assets/afrifama/`. It will not build anywhere else. Decide later whether any of its layout or copy work is worth reusing, unit by unit, without the photos. (Found in 0a.)

- **Global maturity wording partly resolved, 2026-10-31.** Root search defaults, Organization description/reach, FAQ company answer and investor pathway now describe early-growth work and development accurately. Approved homepage storytelling, company positioning and footer copy remain unchanged and can be reviewed in a later content unit. (Found in 1, partly resolved in 13.)
- **Preview protection verification.** GitHub Pages workflow still creates a blocking robots file, removes sitemap and uses BASE_URL-triggered noindex. The local root-base preview emits neither a robots meta nor X-Robots-Tag. Hosted Lovable preview protection is unverified; do not infer it from the GitHub Pages configuration. No deployment/settings changed. (13, 2026-10-31.)
- **Unused About mural.** `src/components/site/AboutSystemMural.tsx` is no longer used after the About rewrite. Delete it or reuse it in a later unit. (Found in 1.)

- **Low-contrast breadcrumb resolved, 2026-10-30.** Shared inverted breadcrumbs supply light text and gold focus on Farmer Partnership, About and Impact dark heroes. Light breadcrumbs retain their default colours. (Found in 0a, resolved in 0d.)

## Open placeholders and facts I need to supply

- Verified direct contact details for Contact. Online enquiry collection remains unavailable by design. (10)

- Verified Afrifama photography for every slot listed in `IMAGE_CREDITS.md` under "Photography still needed". (0a)
