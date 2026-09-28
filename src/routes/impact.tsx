import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Layers3,
  NotebookTabs,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Section, SectionHeading } from "@/components/site/primitives";
import { company, impactFramework, imageSlots } from "@/content/site";
import fieldImage from "@/assets/farmer-training.jpg";
import { photos } from "@/content/photos";
import { KenyaMap } from "@/components/site/KenyaMap";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Early progress in Kilifi County | Afrifama" },
      { property: "og:title", content: "Impact — Early progress in Kilifi County | Afrifama" }
      { property: "og:url", content: "/impact" }
      {
        name: "description",
        content:
          "See how Afrifama measures farmer capability, flock performance, farm economics and livelihood resilience through a commercially sustainable poultry system.",
      },
      {
        property: "og:description",
        content: "See how Afrifama measures farmer capability, flock performance, farm economics and livelihood resilience through a commercially sustainable poultry system.",
      },
      { property: "og:title", content: "Measured Poultry Impact | Afrifama" },
      {
        property: "og:description",
        content:
          "Impact begins with a poultry system that farmers can operate, measure and grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/impact` }],
  }),
  component: Impact,
});

const measurementIcons = [ClipboardCheck, Activity, WalletCards, Users] as const;

function Impact() {
  return (
    <>
      <section className="border-b border-border bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
          <div className="[&_a]:text-primary-foreground/70 [&_span]:text-primary-foreground">
            <Breadcrumbs items={[{ label: "Impact" }]} />
          </div>
          <div className="grid overflow-hidden border-x border-t border-primary-foreground/15 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
              <p className="eyebrow text-gold">Impact</p>
              <h1 className="mt-5 max-w-2xl h1-page font-extrabold">
                {impactFramework.coreMessage}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
                {impactFramework.supportingCopy}
              </p>
            </div>
            <div className="relative min-h-80 lg:min-h-[520px]">
              <img
                src={photos.fieldDemo.src}
                srcSet={photos.fieldDemo.srcSet}
                sizes="(min-width: 1024px) 50vw, 100vw"
                data-image-slot={imageSlots.impact[0]}
                alt="Farmers and poultry specialists discussing a bird during an on-farm demonstration in East Africa"
                width={photos.fieldDemo.width}
                height={photos.fieldDemo.height}
                fetchPriority="high"
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-primary-foreground/20 bg-primary/90 px-6 py-4 backdrop-blur-sm">
                <p className="text-sm font-semibold">Commercial progress, followed from farm records to market participation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="How impact happens"
              title="A stronger livelihood starts with a stronger operating system"
              lead="The pathway keeps inputs, operating changes and longer-term outcomes distinct so progress can be measured honestly."
            />
          </div>
          <ol className="border-t border-border lg:col-span-8">
            {impactFramework.pathway.map((step, index) => (
              <li key={step.number} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1.45fr] sm:items-start">
                <div className="flex items-center gap-3 sm:block">
                  <span className="font-display text-sm font-bold text-terracotta">{step.number}</span>
                  {index < impactFramework.pathway.length - 1 ? <ArrowRight className="size-4 text-gold sm:mt-5 sm:rotate-90" aria-hidden="true" /> : null}
                </div>
                <h3 className="font-display text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="muted">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Current verified progress"
            title="Early progress, reported carefully"
            lead="Applicants are not counted as farmers reached or impacted. A figure appears only after its reporting date, definition and source have been verified together."
          />
          <div className="flex items-center gap-2 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            No unverified totals published
          </div>
        </div>
        <dl className="mt-10 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
          {impactFramework.metrics.map((metric) => (
            <div key={metric.label} className="flex min-h-64 flex-col border-r border-b border-border bg-card p-6">
              <dt className="font-display text-lg font-bold">{metric.label}</dt>
              <dd className="mt-5 font-display text-2xl font-extrabold text-primary">Measurement in progress</dd>
              <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{metric.definition}</dd>
              <dd className="mt-auto border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                <span className="block font-semibold text-foreground">Source: {metric.source}</span>
                Reporting date: Pending first verified release
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we measure"
          title="Four lenses on the pilot"
          lead="These are the questions Afrifama is setting up to measure. They are a framework for the pilot, not claims that outcomes have already been achieved."
        />
        <div className="mt-10 grid border-t border-border md:grid-cols-2">
          {impactFramework.measurementPillars.map((pillar, index) => {
            const Icon = measurementIcons[index] ?? ClipboardCheck;
            return (
              <article key={pillar.title} className={`border-b border-border py-8 md:px-8 ${index % 2 === 1 ? "md:border-l" : ""}`}>
                <Icon className="size-6 text-terracotta" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold">{pillar.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Farmer journey"
              title="From application to market linkage"
              lead="Selection is only one point in a longer commercial journey. Each stage creates a record that helps Afrifama understand readiness, performance and continuity."
              inverted
            />
            <div className="mt-8 aspect-[4/3] overflow-hidden border border-primary-foreground/20">
              <img
                src={fieldImage}
                data-image-slot={imageSlots.impact[1]}
                alt="A field assessment discussion beside a commercial poultry house"
                width={1600}
                height={1067}
                className="size-full object-cover"
              />
            </div>
          </div>
          <ol className="grid border-t border-l border-primary-foreground/20 sm:grid-cols-2 lg:col-span-7">
            {impactFramework.farmerJourney.map((stage, index) => (
              <li key={stage} className="flex min-h-28 items-center gap-4 border-r border-b border-primary-foreground/20 p-5">
                <span className="font-display text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-base font-bold">{stage}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section compact>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Where we work"
              title="Starting in Kilifi County"
              lead="Afrifama's current work is based around Mariakani in Kilifi County, coastal Kenya. We will add locations to this map only when operations begin there."
            />
          </div>
          <KenyaMap className="mx-auto w-full max-w-md lg:col-span-6" />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="relative min-h-80 overflow-hidden lg:col-span-5 lg:min-h-[420px]">
            <img
              src={photos.chickWater.src}
              srcSet={photos.chickWater.srcSet}
              sizes="(min-width: 1024px) 40vw, 100vw"
              data-image-slot={imageSlots.impact[2]}
              alt="A week-old chick beside a water container on a Kenyan smallholding"
              width={photos.chickWater.width}
              height={photos.chickWater.height}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="eyebrow text-terracotta">Stories from the field</p>
            <h2 className="mt-3 h2-section font-extrabold">Evidence before testimony</h2>
            <p className="mt-5 text-xl font-semibold leading-relaxed text-primary">
              Stories will be published as the first partner flocks progress through the production cycle.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Each story will name the farmer and location with permission, document the starting situation and support received, report a verified production change, include the farmer’s own words, and state the reporting period.
            </p>
          </div>
        </div>
      </Section>

      <Section compact>
        <div className="grid gap-8 border-l-4 border-gold pl-6 lg:grid-cols-[1fr_auto] lg:items-end lg:pl-10">
          <div>
            <p className="eyebrow text-terracotta">Evidence and transparency</p>
            <h2 className="mt-3 text-3xl font-extrabold">How we report impact</h2>
            <p className="mt-4 max-w-4xl body-copy text-muted-foreground">{impactFramework.reportingCopy}</p>
          </div>
          <div className="min-w-52 border-t border-border pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
            <p className="flex items-center gap-2 text-sm font-semibold"><CalendarDays className="size-4 text-primary" /> Last updated</p>
            <p className="mt-2 text-muted-foreground">{impactFramework.lastUpdated}</p>
          </div>
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Partnership</p>
            <h2 className="mt-3 h2-section font-extrabold">Help build measurable farmer impact</h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/75">Connect with Afrifama around farmer capability, technical evidence, markets or commercially disciplined growth.</p>
          </div>
          <Button asChild variant="secondary" size="lg"><Link to="/contact">Start a conversation <ArrowRight className="size-4" /></Link></Button>
        </div>
      </Section>
    </>
  );
}
