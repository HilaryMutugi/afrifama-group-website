<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All Afrifama claims, statistics, product copy, navigation and FAQ content live in `src/content/site.ts` — one editable source so figures and wording can be updated without touching layout.
- Shared site chrome (header, footer, skip link) lives in `src/routes/__root.tsx`; reusable page primitives live in `src/components/site/` — keeps every page visually consistent.
- Future/unreleased surfaces (e.g. `/egg-supply-interest`) stay gated behind `futureSurfaces` flags in `src/content/site.ts`, noindex and out of nav/sitemap — so architecture can exist before the offering does.
- All photography positions render through the shared `ImagePlaceholder` component and use centrally named `imageSlots` from `src/content/site.ts` — so photos can be added later without changing page structure.
- Page-specific editorial illustrations live as reusable components in `src/components/site/` and use global semantic colour tokens — keeping responsive artwork accessible and on-brand.
- Contact renders only the typed information destinations in the central enquiry data, with no submission handler or integration, so unavailable delivery cannot look functional.
- Enquiry CTA and policy availability copy, search defaults and Organization data are centralised in `src/content/site.ts`; information links must not imply delivery while collection is unavailable, keeping visible and crawler-facing claims consistent.
- Shared navigation uses exact current-page matching and separate active-section matching; mobile navigation uses the existing Radix dialog for focus, Escape and scroll isolation, with route selection handing focus to main.
- Dark-hero breadcrumbs opt into the shared inverted variant; light PageHero breadcrumbs retain their default tokens to avoid route-local contrast overrides.
