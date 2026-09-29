// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pagesPreview = process.env["GITHUB_PAGES_BUILD"] === "true";
const pagesBase = "/afrifama-group-website/";

export default defineConfig({
  vite: pagesPreview ? { base: pagesBase } : {},
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(pagesPreview
      ? {
          prerender: {
            enabled: true,
            failOnError: true,
            crawlLinks: true,
            filter: ({ path }: { path: string }) => !path.includes("/egg-supply-interest"),
          },
          pages: [
            "/field-notes/preparing-farmers-for-the-first-layer-flock",
            "/field-notes/building-better-feed-from-the-raw-material-up",
            "/field-notes/why-reliable-poultry-genetics-matter",
          ].map((path) => ({ path: `${pagesBase.slice(0, -1)}${path}` })),
        }
      : {}),
  },
});
