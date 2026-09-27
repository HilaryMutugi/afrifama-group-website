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
- Future photography positions use centrally named `imageSlots` from `src/content/site.ts` — so later asset replacement is unambiguous without adding empty public placeholders.
- Page-specific editorial illustrations live as reusable components in `src/components/site/` and use global semantic colour tokens — keeping responsive artwork accessible and on-brand.
