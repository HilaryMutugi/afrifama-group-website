# Afrifama five-page refinement

## Scope
Refine only Poultry, Feeds, Genetics & Hatchery, Impact, Farmer Partnership, plus the shared footer contact display. The homepage and established design system remain unchanged.

## Changes
- Tighten Feeds by removing unavailable resource cards, showing three concise FAQs, and merging customer pathways into one page-specific final action area.
- Tighten Farmer Partnership by grouping eight support items into four, showing six priority FAQs with a link to the full FAQ page, folding privacy into the form area, and removing repeated risk and selection explanations.
- Make the farmer form visibly unavailable: disable submission, remove validation/success simulation, label it “Online applications opening soon,” and link to Contact.
- Reduce Poultry, Impact and Farmer Partnership opening-title scale and height across desktop and mobile.
- Add a compact Brooding → Rearing → Laying strip inside Poultry’s existing connected-system section.
- Replace repeated generic closing blocks with one page-specific final action on each page using the supplied headings.
- Add stable `data-image-slot` names for all requested future image positions without changing or generating images. Where a page has fewer images than future slots, reserve names in its page-level slot configuration without adding empty public placeholders.
- Remove the fake phone, email, contact warning and social links site-wide. Keep Kilifi County, Kenya and a working Contact link.

## Content and accessibility
- Keep Genetics & Hatchery visibly “In Development” and Farmer Partnership “Pilot underway.”
- Keep existing factual safeguards; add no figures, testimonials, technical results or implied availability.
- Preserve semantic heading order, descriptive image alternatives, keyboard-visible controls and valid destinations.
- Keep reusable wording and image-slot definitions in the central content file.

## Verification
- Check the current build output after edits.
- Test all five pages at desktop, tablet and mobile widths.
- Verify headings, buttons, focus behavior, disabled form state, image-slot markers and absence of public placeholders.
- Capture previews of all five updated pages for review.
