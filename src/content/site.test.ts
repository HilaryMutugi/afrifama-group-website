import { describe, expect, test } from "bun:test";
import { enquiryRoutes } from "./site";

describe("Contact enquiry destinations", () => {
  test("preserves all six enquiry audiences", () => {
    expect(enquiryRoutes.map((route) => route.value)).toEqual([
      "feed", "farmer", "supplier", "technical", "investor", "general",
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