# Afrifama final-site handoff

Date: 1 November 2026 (UTC). Scope: final QA, narrow polish and handoff.

## Current status

The site remains unpublished on Lovable. Nothing was published or deployed in this session. An older GitHub Pages concept-preview workflow exists; its historical deployments are not a production launch or proof of today's hosted behaviour.

Approved homepage, Our Businesses and other page layouts, imagery, colours, murals, navigation labels and footer copy were preserved. No dependencies, services, integrations or account settings changed. Contact and applications remain informational, not collection services. This is a checked preview with launch sign-off outstanding, not an unconditional ready-to-launch certification.

## Pages and viewports checked

Each of these was opened at 1440 × 1800 desktop, 768 × 1800 tablet and 390 × 844 mobile, with top, middle and lower-page screenshots and rendered checks:

- `/`, `/about`, `/businesses`, `/poultry`, `/feeds`
- `/farmer-partnership`, `/genetics-hatchery`, `/impact`
- `/field-notes`
- `/field-notes/preparing-farmers-for-the-first-layer-flock`
- `/field-notes/building-better-feed-from-the-raw-material-up`
- `/field-notes/why-reliable-poultry-genetics-matter`
- `/faqs`, `/contact`, `/privacy`, `/terms`
- `/qa-deliberately-unknown` (deliberate 404)
- `/egg-supply-interest` (disabled, deliberate 404)

Total: 16 real public routes plus two unavailable-route checks, 54 viewport states. Final checks were repeated after fixes. Review covered headings, visible status, menu/breadcrumb appearance, crops, spacing, clipping and overflow. Screenshot sheets included middle and footer output, not only first screens.

## Readiness evidence

| Check | Observed result |
|---|---|
| Existing and added tests | `bun test`: 18 pass, 0 fail, 46 assertions, two files |
| Preview build | Harness log: `build OK` at 05:08:15 and 05:11:52 UTC on 2026-11-01 |
| Scoped code lint | Changed route/content files pass with only the Prettier rule disabled |
| Whole-site code lint | 0 errors, 6 existing fast-refresh warnings with the Prettier rule disabled |
| Full lint including formatting | Not passing. Baseline audit: 495 formatting errors and 6 warnings; subsequent full run: 519 formatting findings and 6 warnings. No repository-wide formatting or line-ending changes attempted. |
| Production output/bundle | No accessible `dist` or `.output` artifact. Production JS/CSS raw/gzip sizes and before/after comparison remain unverified. No manual build/typecheck was run because the preview harness owns those checks. |
| Public media inventory | 16,921,838 bytes, approximately 16.1 MiB. This is the public folder, not a production bundle or measured page transfer. |
| Routes | All 16 public routes returned 200; deliberate unknown and disabled egg-interest URLs returned 404 |
| Headings | Exactly one H1 in every checked state; heading hierarchy inspected |
| Links and anchors | 16 distinct internal destinations checked; no broken destination or missing referenced anchor |
| Image assets | 90 distinct rendered source/source-set URLs checked, all available; source-set width descriptors match files; rendered images carry alt text and width/height attributes |
| Metadata | Each real public route has one title, description and canonical, matching OG title/description and self OG URL; no duplicate meta names/properties observed |
| Sitemap | 13 retained production URLs, no duplicates, no sample article URLs or egg-interest URL. Existing domain retained. No lastmod values exist, so none were fabricated. |
| Runtime/network | No JS exceptions, console errors or failed assets on real public pages. Expected document 404 requests produce browser resource messages on the two unavailable URLs. |
| Overflow | None at 1440, 768 or 390 |
| Menus/keyboard | Skip-link focus and activation, business menu Enter/Space, Escape/focus return, mouse selection, mobile open/close, scroll isolation, exact current-page state and route-close/main focus passed |
| Mobile navigation targets | All tested mobile dialog links/buttons at least 44px high |
| Page controls | Field Notes filters and FAQ expansion exercised; 404 Go home recovery passed |
| Reduced motion | Emulated reduced motion: no running animations in captured route states; homepage rotation paused. This does not replace testing every OS/browser preference. |

Detailed browser scripts, JSON reports and screenshots were stored temporarily under `/tmp/browser/final-qa/`; these may disappear when the sandbox resets. The retained evidence is this report and the project regression tests.

## Final-QA changes

1. Centralised sample publication metadata and restrictions in `site.ts`. Sample articles emit `noindex, nofollow`, qualified titles/descriptions and no Article JSON-LD. Real future articles are not automatically restricted by this sample rule.
2. Removed only the three sample article URLs from the public sitemap. Kept the Field Notes index and all other URLs.
3. Made Field Notes index heading and lead explicitly identify template examples, not genuine reports. Added the same concise notice at the top of sample articles. Existing article bodies and page structures were preserved.
4. Used the existing Button for Field Notes category filters and ensured a 44px minimum height, preserving the compact interface.
5. Added noindex/nofollow to the shared not-found output. The disabled egg route throws notFound before its own head runs; previously the visible 404 response did not inherit the route's declared noindex. Its final response now emits the protection in the head, while staying a 404 and out of navigation/sitemap.
6. Added four sample-publication regression tests. Reconciled roadmap/tracker notes against today's source and evidence.

No files were deleted. The unused AboutSystemMural and unused image slots were recorded rather than removed speculatively.

## Launch blockers and approvals

- **Hilary's content sign-off:** Story Bible still contains OPEN questions. Confirm current figures and evidence dates, operating scope, the pilot and the distinction from Genetics & Hatchery in development. Visible homepage progress figures include 150+, 205+, 7, 500+ and 4; the Impact pilot snapshot includes 3 initial farmers and a minimum 150 birds per farmer. Historical approval is not fresh documentary verification.
- **Feed range consistency:** Feeds currently presents six products, while homepage/proof/schema-facing descriptions refer to four core feeds and photography shows a four-product range. Confirm whether these are different legitimate ranges and approve the explanation before changing approved copy.
- **Imagery sign-off:** Older workflow rules say placeholder-only, but current source and IMAGE_CREDITS record later user-supplied/refined imagery. Many sources have ChatGPT-exported filenames; source provenance and representation of Afrifama activity are not independently verified. Do not treat these as evidence of actual facilities, partner farms or outcomes. Hilary must confirm the permitted presentation and alt descriptions; imagery was not altered today.
- **Legal review:** Privacy and Terms remain draft material. Review for the actual business, data practices and website use before launch.
- **Release verification:** Obtain accessible production output and record bundle sizes, then verify the eventual public domain, crawler responses and published output in a separately authorised launch session. Existing canonical/sitemap host `https://afrifama.co.ke` was preserved, not verified as the configured public domain.
- **Full lint gate:** Formatting lint is still failing. If full lint is required for release, address it in a separately scoped formatting task; do not represent today's scoped lint as a full lint pass.

### Wording awaiting Hilary approval (preserved)

- Contact: **Start with the right route**
- Contact: **See where your enquiry fits.**
- Contact: **Online enquiries are being prepared**
- Shared/homepage CTA: **Find Your Route**
- Farmer Partnership: **Review farm readiness**

No approval was inferred from this QA request. No other approved copy was broadly rewritten.

## Missing details and assets

- Verified direct contact email/phone and any publishable address beyond Kilifi County, Kenya. None invented; online enquiries/applications remain unavailable by design.
- Genuine documented Field Notes to replace the three templates when ready.
- Verified raw-material photography: maize, sunflower, soya, rice bran, limestone and millet; raw-material overview; verified Impact farmer story. These eight positions currently display placeholders.
- `impact-hero` is a reserved registry slot, but the current Impact opening is a data-led pilot snapshot and does not render it. This is not a broken image request.
- Evidence sources/reporting dates for figures and current approved feed specifications, packaging and product-range reconciliation.

## Manual checks still required

- VoiceOver/NVDA screen-reader testing, real iOS/Android menus and gestures, 200%/400% zoom, forced-colour/high-contrast mode and quantitative contrast testing of all text states. Visual review and token inspection are not a WCAG certification.
- Some existing non-navigation controls are below 44px, including homepage carousel dots/arrows and several compact page links/buttons. This is not a confirmed WCAG failure by size alone, but touch-target refinement remains a follow-up; approved homepage controls were not redesigned.
- The local root-base preview has no general preview-only noindex. GitHub Pages configuration adds noindex via BASE_URL, blocks robots and removes its sitemap. That does not establish hosted Lovable preview protection; hosted crawler headers remain unverified.
- A missing Field Note slug uses its own not-found message without throwing a real 404; verify intended resource status in a dedicated error-handling task. Also review router-wide defaultErrorComponent configuration and forced loader errors. No broad error-boundary change made today.
- Real slow-network performance, production Core Web Vitals, JS/CSS bundle sizes, image transfer budgets and social crawler output after an authorised publication.

## Post-launch improvements, not implemented

- Replace/verify presentation imagery and remaining placeholders after approval; preserve source credits and accessible descriptions.
- Document real field learning and publish only fact-checked articles.
- Consider genuine enquiry collection only in a separately approved project with consent/privacy review.
- Resolve code formatting debt separately and remove unused modules only after conclusive usage checks and approval.

## Concise launch checklist

- [ ] Hilary approves the five wording items above and the facts/product ranges.
- [ ] Confirm imagery provenance/representation and policy/legal review.
- [ ] Confirm chosen public domain and canonical/sitemap host agree.
- [ ] Obtain passing production artifact evidence and measured JS/CSS sizes.
- [ ] Complete manual accessibility, device, zoom and slow-network checks.
- [ ] Confirm sample articles and future egg interest remain noindex and outside sitemap.
- [ ] Keep enquiries/applications unavailable until a verified contact method or separately approved collection exists.
- [ ] Get explicit permission for a later launch, then verify the live output and crawler rules.

**The site remains unpublished. This QA session did not publish or deploy.**