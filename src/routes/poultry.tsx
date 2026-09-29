import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Building2, ShieldCheck, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Breadcrumbs, CheckList, Section, SectionHeading, StatusBadge } from "@/components/site/primitives";
import { company, imageSlots, poultryOperatingSystem, poultryProductionStages } from "@/content/site";

export const Route = createFileRoute("/poultry")({
  head: () => ({
    meta: [
      { title: "Afrifama Poultry — Commercial Layer Production in Kenya" },
      { property: "og:title", content: "Afrifama Poultry — Commercial Layer Production in Kenya" },
      { property: "og:url", content: "/poultry" },
      {
        name: "description",
        content:
          "See how Afrifama connects commercial layer production, stage-based feeds, biosecurity, records and farmer support in Kilifi County, Kenya.",
      },
      {
        property: "og:description",
        content: "See how Afrifama connects commercial layer production, stage-based feeds, biosecurity, records and farmer support in Kilifi County, Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/poultry` }],
  }),
  component: Poultry,
});

const welfare = [
  "Stocking density appropriate to house design",
  "Ventilation and litter managed as daily routines",
  "Continuous access to clean water",
  "Stage-appropriate nutrition",
  "Planned vaccination and flock-health schedules",
  "Controlled visitor and equipment movement",
];

const operatingMarkers = [
  { icon: Building2, label: "Facilities", value: "Fit for the flock stage" },
  { icon: Wheat, label: "Nutrition", value: "Matched to production needs" },
  { icon: BookOpen, label: "Records", value: "Reviewed every day" },
  { icon: ShieldCheck, label: "Biosecurity", value: "Built into routine" },
];

function Poultry() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Businesses", to: "/businesses" }, { label: "Poultry" }]} />
          <div className="grid items-stretch overflow-hidden border border-border bg-card lg:grid-cols-[0.88fr_1.12fr]">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex items-center gap-3">
                <p className="eyebrow text-terracotta">Afrifama Poultry</p>
                <StatusBadge status="Operational" />
              </div>
              <h1 className="mt-5 max-w-xl h1-page font-extrabold">
                A stronger flock starts with a stronger operating system.
              </h1>
              <p className="mt-6 max-w-xl body-copy text-muted-foreground">
                Commercial layer production connected to stage-based nutrition, disciplined facilities,
                daily records and practical farmer support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/farmer-partnership">Work with Afrifama <ArrowRight className="size-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/feeds">Explore our feeds</Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden lg:min-h-[520px]">
              <ImagePlaceholder
                slot={imageSlots.poultry[0]}
                label="Poultry hero photography"
                className="absolute inset-0 size-full border-0"
              />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-primary-foreground/20 bg-primary/90 backdrop-blur-sm sm:grid-cols-4">
                {operatingMarkers.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="border-primary-foreground/15 p-4 text-primary-foreground sm:border-r last:border-r-0">
                    <Icon className="size-4 text-gold" aria-hidden="true" />
                    <p className="mt-2 text-xs font-bold uppercase">{label}</p>
                    <p className="mt-1 text-xs text-primary-foreground/70">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="max-w-3xl py-5 text-sm leading-relaxed text-muted-foreground">
            Our current focus is commercial layer production. The first production cycle is underway,
            and we publish no sales or output figures that have not been verified.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="One connected system"
              title="Every part of production affects the next"
              lead="We separate the operating disciplines clearly, then manage them as one commercial system."
            />
          </div>
          <ol className="border-t border-border lg:col-span-8">
            {poultryOperatingSystem.map((item) => (
              <li key={item.number} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1.45fr_auto] sm:items-center">
                <span className="font-display text-sm font-bold text-terracotta">{item.number}</span>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <Link to={item.to} aria-label={`Learn more about ${item.title}`} className="text-primary transition-transform hover:translate-x-1">
                  <ArrowRight className="size-5" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <ol className="mt-10 grid border-y border-border sm:grid-cols-3" aria-label="Poultry production stages">
          {poultryProductionStages.map((stage, index) => {
            return (
              <li key={stage.title} className={`py-5 sm:px-6 ${index > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""}`}>
                <ImagePlaceholder slot={imageSlots.poultry[index + 1] ?? `poultry-stage-${index + 1}`} label={`${stage.title} photography`} className="mb-4 aspect-[16/10] w-full" />
                <div className="flex items-center gap-3"><span className="font-display text-xs font-bold text-terracotta">0{index + 1}</span><h3 className="font-display text-lg font-bold">{stage.title}</h3></div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section tone="forest">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Facilities, welfare and biosecurity"
              title="Healthy birds are a management outcome"
              lead="The poultry house is not simply shelter. It is the environment in which nutrition, health and daily care either work together or break down."
              inverted
            />
          </div>
          <div className="border-y border-primary-foreground/20 py-7 lg:col-span-7 lg:px-8">
            <CheckList items={welfare} inverted />
          </div>
        </div>
      </Section>

      <Section compact>
        <div className="grid gap-8 border-l-4 border-gold pl-6 lg:grid-cols-[1fr_auto] lg:items-center lg:pl-10">
          <div>
            <p className="eyebrow text-terracotta">Evidence before claims</p>
            <h2 className="mt-3 text-2xl font-extrabold">We publish progress only when it can be verified.</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              We do not publish unverified sales, egg output or profitability figures, and individual farmer and flock records remain private.
            </p>
          </div>
          <Button asChild variant="outline"><Link to="/impact">View early progress</Link></Button>
        </div>
      </Section>

      <Section tone="forest" compact>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="eyebrow text-gold">Next step</p><h2 className="mt-3 text-3xl font-extrabold">Build a more disciplined production system</h2><p className="mt-4 max-w-2xl text-primary-foreground/75">Connect flock management, stage-specific nutrition and reliable records around your production goals.</p></div>
          <Button asChild size="lg" variant="secondary"><Link to="/contact">Talk to Afrifama <ArrowRight className="size-4" /></Link></Button>
        </div>
      </Section>
    </>
  );
}