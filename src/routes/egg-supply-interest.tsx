import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site/primitives";
import { company, futureSurfaces } from "@/content/site";

/**
 * FUTURE SURFACE — intentionally hidden.
 * This page is architecture for a later "Register Interest in Egg Supply" flow.
 * It stays unreachable and noindex until futureSurfaces.eggSupplyInterest.enabled
 * is set to true in src/content/site.ts, and it is deliberately absent from the
 * published navigation, footer and sitemap.
 */
export const Route = createFileRoute("/egg-supply-interest")({
  beforeLoad: () => {
    if (!futureSurfaces.eggSupplyInterest.enabled) throw notFound();
  },
  head: () => ({
    meta: [
      { title: "Register Interest in Egg Supply | Afrifama" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Future page for institutional egg-supply interest. Not yet available.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/egg-supply-interest` }],
  }),
  component: EggSupplyInterest,
});

function EggSupplyInterest() {
  return (
    <>
      <PageHero
        eyebrow="Future"
        title="Register Interest in Egg Supply"
        lead="This page will open when Afrifama's egg volumes support institutional supply conversations."
        status="Future"
        breadcrumbs={[{ label: "Register Interest in Egg Supply" }]}
      />
      <Section>
        <Card className="max-w-2xl">
          <h2 className="font-display text-lg font-bold">Not yet open</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Until then, buyers and institutions can reach us through the general contact route.
          </p>
          <Link to="/contact" className="mt-5 inline-flex font-display font-bold text-primary">
            Go to Contact
          </Link>
        </Card>
      </Section>
    </>
  );
}
