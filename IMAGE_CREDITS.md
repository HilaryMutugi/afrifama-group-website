# Image credits register

No photographs are used on the site. Every photo position renders the shared `ImagePlaceholder` component with a named slot from `imageSlots` in `src/content/site.ts`. Do not add image files, stock photos or external image URLs until verified Afrifama photography is approved.

## Maps and data

| Page | Location | Local file | Source | Creator | Licence | Attribution required |
|---|---|---|---|---|---|---|
| Impact | Where we work map | src/components/site/kenyaMapPaths.ts, KenyaMap.tsx | https://www.geoboundaries.org/ (gbOpen KEN ADM1, simplified) | geoBoundaries / RCMRD GeoPortal | Public domain | No (credited) |

Map modifications: projected and simplified to SVG paths; styled in Afrifama colours. Shows only Kilifi County and Mariakani; no other sites claimed.

## Photography still needed

Slots are defined in `imageSlots` in `src/content/site.ts`.

| Page | Slots |
|---|---|
| Home | home-hero (named in src/routes/index.tsx, not yet in imageSlots) |
| About | about-hero, about-origin, about-feeds, about-operations |
| Poultry | poultry-hero, poultry-brooding, poultry-rearing, poultry-laying |
| Feeds | feeds-hero, feeds-raw-materials, feeds-production, plus six ingredient details (maize, sunflower, soya, rice bran, limestone, millet) |
| Genetics & Hatchery | genetics-hero, genetics-parent-stock |
| Impact | impact-hero, impact-field-assessment, impact-farmer-story |
| Farmer Partnership | partnership-hero, partnership-training, partnership-farm-assessment |

Also wanted: chick delivery, poultry-house exterior, feed bags, record review, founder and team.
