import { describe, expect, test } from "bun:test";
import { enquiryRoutes, organizationSchema, futureSurfaces, partnerPathways, poultryPathways, feedsPage, impactFramework, fieldNotes, fieldNotePublication } from "./site";
import { readFileSync } from "node:fs";

describe("Contact enquiry destinations", () => {
  test("preserves all six enquiry audiences", () => {
    expect(enquiryRoutes.map((route) => route.value)).toEqual([
      "feed",
      "farmer",
      "supplier",
      "technical",
      "investor",
      "general",
    ]);
  });

  test.each([
    ["feed", "/feeds"],
    ["farmer", "/farmer-partnership"],
    ["technical", "/genetics-hatchery"],
    ["investor", "/impact"],
  ])("routes %s to its relevant information page", (audience, destination) => {
    expect(enquiryRoutes.find((route) => route.value === audience)?.nextStep?.to).toBe(destination);
  });

  test.each(["supplier", "general"])("does not invent a submission route for %s", (audience) => {
    expect(enquiryRoutes.find((route) => route.value === audience)?.nextStep).toBeNull();
  });
});

describe("Current reach and information routes", () => {
  test("Organization serves Kenya, not a current East African region", () => {
    expect(organizationSchema.areaServed).toEqual(["Kenya"]);
    expect(organizationSchema.address.addressRegion).toBe("Kilifi County");
    expect(organizationSchema.address.addressCountry).toBe("KE");
  });

  test("technical and investor pathways lead to live information", () => {
    expect(partnerPathways.find((route) => route.title === "Technical partners")?.to).toBe("/genetics-hatchery");
    expect(partnerPathways.find((route) => route.title === "Investors and strategic partners")?.to).toBe("/impact");
    expect(poultryPathways.find((route) => route.audience === "Strategic partners")?.to).toBe("/impact");
    expect(impactFramework.partnerPathways.find((route) => route.title === "Technical partners")?.to).toBe("/genetics-hatchery");
  });

  test("feed pathways direct customers to feeds and suppliers to status", () => {
    for (const title of ["Poultry farmers", "Dealers and distributors", "Commercial farms"]) {
      expect(feedsPage.customerPathways.find((route) => route.title === title)?.to).toBe("/feeds");
    }
    expect(feedsPage.customerPathways.find((route) => route.title === "Raw-material suppliers")?.to).toBe("/contact");
  });

  test("egg supply remains disabled and outside the sitemap", () => {
    expect(futureSurfaces.eggSupplyInterest.enabled).toBe(false);
    const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
    const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
    expect(paths).not.toContain("/egg-supply-interest");
    expect(new Set(paths).size).toBe(paths.length);
  });
});

describe("Sample publication restrictions", () => {
  test.each(fieldNotes.map((note) => [note.slug, note]))("keeps sample %s noindex and outside the public sitemap", (slug, note) => {
    const publication = fieldNotePublication(note);
    expect(note.sample).toBe(true);
    expect(publication.robots).toBe("noindex, nofollow");
    expect(publication.includeInSitemap).toBe(false);
    const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
    const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
    expect(paths).not.toContain(`/field-notes/${slug}`);
    expect(paths).toContain("/field-notes");
  });

  test("does not apply sample restrictions to a future documented article", () => {
    const note = fieldNotes[0];
    expect(fieldNotePublication({ ...note, sample: false }).robots).toBeUndefined();
    expect(fieldNotePublication({ ...note, sample: false }).includeInSitemap).toBe(true);
  });
});
