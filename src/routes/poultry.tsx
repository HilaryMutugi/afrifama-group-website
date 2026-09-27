import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  Section,
  SectionHeading,
  Card,
  CheckList,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company } from "@/content/site";
import heroImage from "@/assets/poultry-layers.jpg";

export const Route = createFileRoute("/poultry")({
  head: () => ({
    meta: [
      { title: "Afrifama Poultry — Commercial layer production in Kilifi, Kenya" },
      {
        name: "description",
        content:
          "Afrifama's commercial layer production: management approach, bird welfare and biosecurity, and how production is linked to partner farms in Kilifi County.",
      },
      { property: "og:title", content: "Afrifama Poultry — Commercial layer production" },
      {
        property: "og:description",
        content:
          "Stage-based nutrition, consistent management routines and farmer-linked layer production in Kilifi County, Kenya.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/poultry` }],
  }),
  component: Poultry,
});

const approach = [
  {
    title: "Stage-based management",
    body: "Brooding, rearing and lay are managed as distinct stages, each with its own nutrition, lighting, space and health routine.",
  },
  {
    title: "Records before opinions",
    body: "Feed issued, water, mortality, body weight and egg numbers are recorded daily so decisions rest on trend data.",
  },
  {
    title: "Nutrition owned in-house",
    body: "Because we formulate our own feed, production problems and formulation decisions sit with the same team.",
  },
  {
    title: "Repeatable routines",
    body: "The routines we run on our own flock are the routines we train partner farmers to run on theirs.",
  },
];

const welfare = [
  "Stocking density appropriate to house design",
  "Ventilation and litter management",
  "Continuous access to clean water",
  "Stage-appropriate nutrition",
  "Planned vaccination schedules",
  "Controlled visitor and equipment movement",
  "Prompt separation and treatment of sick birds",
];

function Poultry() {
  return (
    <>
      <PageHero
        eyebrow="Poultry"
        title="Commercial layer production, run to a repeatable standard."
        lead="Our current focus is commercial layer production. The first production cycle is underway, and we publish no sales or output figures that have not been verified."
        status="Operational"
        breadcrumbs={[{ label: "Our Businesses", to: "/businesses" }, { label: "Poultry" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Production approach"
              title="How we run the flock"
              lead="Layer production rewards consistency. Most of our approach is about removing variation rather than chasing peaks."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {approach.map((a) => (
                <Card key={a.title}>
                  <h3 className="font-display text-base font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={heroImage}
              alt="Healthy layer birds in a clean, well-ventilated poultry house managed by an Afrifama farmer"
              loading="lazy"
              width={1600}
              height={1104}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Welfare and biosecurity"
              title="Healthy birds are a management outcome"
              lead="Bird welfare and biosecurity are treated as daily operating routines, not one-off interventions."
            />
          </div>
          <div className="lg:col-span-7">
            <Card>
              <CheckList items={welfare} />
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Farmer-linked production"
              title="Production that extends onto partner farms"
              lead="Our own flock is where routines are tested. Partner farms are where they scale, with the same nutrition, health planning and record-keeping expectations."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/farmer-partnership">Understand the Partnership</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/feeds">See stage-based nutrition</Link>
              </Button>
            </div>
          </div>
          <Card className="bg-secondary/60">
            <h3 className="font-display text-base font-bold">What we do not publish</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We do not publish unverified sales, egg output or profitability figures, and we do not
              publish individual farmer or flock data. Verified progress figures appear on the
              Impact page.
            </p>
            <Link
              to="/impact"
              className="mt-5 inline-flex font-display text-sm font-bold text-primary"
            >
              View early progress
            </Link>
          </Card>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
