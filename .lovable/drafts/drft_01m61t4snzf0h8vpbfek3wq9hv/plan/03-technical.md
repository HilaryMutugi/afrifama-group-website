## Technical details
- Rewrite the `aboutStory` copy in `src/content/site.ts`, adding `challenges`, `building`, `howWeWork`, `status` and `paths`. All values are reused from verified site content.
- Recompose `src/routes/about.tsx` using the existing `ImagePlaceholder` and `imageSlots.about`, plus the existing type and spacing utilities. Update the head title and description.
- Leave all other pages, the header and the footer untouched.
- Check the page with Playwright at 1440, 768 and 390 pixels wide for overflow, heading length and working links.
