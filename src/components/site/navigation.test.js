import { describe, expect, test } from "bun:test";
import { isCurrentPage, isActiveSection } from "./navigation";

describe("Navigation current-page and section state", () => {
  test("marks the exact destination as current, including a trailing slash", () => {
    expect(isCurrentPage("/feeds", "/feeds")).toBe(true);
    expect(isCurrentPage("/feeds/", "/feeds")).toBe(true);
    expect(isCurrentPage("/field-notes/article", "/field-notes")).toBe(false);
  });

  test("an active business child does not make Overview the current page", () => {
    expect(isActiveSection("/feeds", "/feeds")).toBe(true);
    expect(isCurrentPage("/feeds", "/businesses")).toBe(false);
  });

  test("section matching respects route boundaries", () => {
    expect(isActiveSection("/field-notes/article", "/field-notes")).toBe(true);
    expect(isActiveSection("/feeds-other", "/feeds")).toBe(false);
    expect(isActiveSection("/about", "/")).toBe(false);
  });
});